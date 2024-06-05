import {
 CSSProperties,
 FC,
 ReactNode,
 useEffect,
 useRef,
 useState
} from 'react'

interface MyLazyloadProps {
  className?: string
  style?: CSSProperties
  offset?: number | string
  width?: number | string
  height?: number | string
  onContentVisible?: () => void
  placeholder?:ReactNode,
  children: ReactNode
}

const MyLazyload: FC<MyLazyloadProps> = (props) => {
  const {
    className = '',
    style,
    offset = 0,
    width,
    onContentVisible,
    placeholder,
    height,
    children
  } = props

  const containerRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  const elementObserver = useRef<IntersectionObserver>()

  function lazyLoadHandler(entries: IntersectionObserverEntry[]) {
    const [entry] = entries
    const { isIntersecting } = entry

    if (isIntersecting) {
      setVisible(true)
      onContentVisible?.()

      const node = containerRef.current
      if (node && node instanceof HTMLElement) {
        elementObserver.current?.unobserve(node)
      }
    }
  }

  useEffect(() => {
    const options = {
      rootMargin: typeof offset === 'number' ? `${offset}px` : offset || '0px',
      threshold: 0
    }

    elementObserver.current = new IntersectionObserver(lazyLoadHandler, options)

    const node = containerRef.current

    if (node instanceof HTMLElement) {
      elementObserver.current.observe(node)
    }

    return () => {
      if (node && node instanceof HTMLElement) {
        elementObserver.current?.unobserve(node)
      }
    }
  })

  const styles = { height, width, ...style }

  return <div ref={containerRef} className={className} style={styles}>
    {visible ? children : placeholder}
  </div>
}

export default MyLazyload