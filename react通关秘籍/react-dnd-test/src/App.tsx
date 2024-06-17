import { useDrag, useDragLayer, useDrop } from 'react-dnd';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend'

interface ItenType {
  color: string;
}

interface BoxProps {
  color: string
}

function DragLayer() {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }))

  if (!isDragging) {
    return null
  }

  return (
    <div className='drag-layer' style={{
      left: currentOffset?.x,
      top: currentOffset?.y
    }}>{item.color} 拖拖拖</div>
  )
}

function Box(props: BoxProps) {
  const ref = useRef(null)

  const [{dragging}, drag, dragPreview] = useDrag(() => ({
    type: 'box',
    item: {
      color: props.color
    },
    collect: (monitor) => {
      return {
        dragging: monitor.isDragging()
      }
    }
  }))

  useEffect(() => {
    drag(ref)
    dragPreview(getEmptyImage())
  }, [])

  return <div ref={ref} className={ dragging ? 'box dragging' : 'box' }
    style={{
      backgroundColor: props.color || 'blue'
    }}
  ></div>
}

function Container() {
  const [boxes, setBoxes] = useState<ItenType[]>([])

  const ref = useRef(null)

  const [, drop] = useDrop(() => {
    return {
      accept: 'box',
      drop: (item: ItenType) => {
        setBoxes(boxes => [...boxes, item])
      }
    }
  })

  useEffect(() => {
    drop(ref)
  }, [])

  return <div ref={ref} className="container">
    {
      boxes.map(item => {
        return <Box color={item.color}></Box>
      })
    }
  </div>
}

function App() {
  return <div>
    <Container></Container>
    <Box color='blue'></Box>
    <Box color='red'></Box>
    <Box color='green'></Box>
    <DragLayer></DragLayer>
  </div>
}

export default App;
