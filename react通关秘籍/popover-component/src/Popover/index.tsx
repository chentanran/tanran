import { PropsWithChildren, ReactNode } from 'react'
import { arrow, flip, useFloating, offset, useHover, useClick, useDismiss, useInteractions, FloatingArrow } from '@floating-ui/react'
import { useRef, useState } from 'react'
import './index.css'

type Alignment = 'start' | 'end'
type Side = 'top' | 'right' | 'bottom' | 'left'
type AlignedPlacement = `${Side}-${Alignment}`

interface PoppverProps extends PropsWithChildren {
  content: ReactNode,
  trigger?: 'hover' | 'click',
  placement?: Side | AlignedPlacement,
  open?: boolean,
  onOpenChange?: (open: boolean) => void,
  className?: string,
  style?: React.CSSProperties
}

export default function Popover(props: PoppverProps) {
  const {
    open,
    onOpenChange,
    trigger = 'hover',
    placement = 'bottom',
    content,
    className,
    children,
    style
  } = props

  const arrowRef = useRef(null)
  const [isOpen, setIsOpen] = useState(open)

  const {refs, floatingStyles, context} = useFloating({
    open: isOpen,
    onOpenChange: (open) => {
      setIsOpen(open)
      onOpenChange?.(open)
    },
    placement,
    middleware: [
      offset(10),
      arrow({
        element: arrowRef
      }),
      flip()
    ]
  })

  const interaction = trigger === 'hover' ? useHover(context) : useClick(context)

  const dismiss = useDismiss(context)

  const { getReferenceProps, getFloatingProps } = useInteractions([interaction, dismiss])

  return (
    <> 
      <span ref={refs.setReference} {...getReferenceProps()} className={className} style={style}>
          {children}
        </span>
      {
        isOpen && (
          <div 
            className='popover-floating' 
            ref={refs.setFloating} 
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {content}
            <FloatingArrow ref={arrowRef} context={context} fill="#fff" stroke="#000" strokeWidth={1}/>
          </div>
        )
      }
    </>
  )
}