import { CSSProperties, useState } from 'react'
import cs from 'classnames'
import './index.scss'
import { ColorType } from './interface'
import { Color } from './color'
import Palette from './Palette'

export interface ColorPickerProps {
  className?: string;
  style?: CSSProperties;
  value?: ColorType;
  onChange?: (color: Color) => void;
}

function ColorPickerPanel(props: ColorPickerProps) {
  const { className, style, value, onChange } = props

  const [colorValue, setColorValue] = useState<Color>(() => {
    if (value instanceof Color) {
      return value
    }
    return new Color(value)
  })

  const classNames = cs('color-picker', className)

  function onPaletteColorChange(color: Color) {
    setColorValue(color)
    onChange?.(color)
  }

  return (
    <div className={classNames} style={style}>
      <Palette color={colorValue} onChange={onPaletteColorChange}></Palette>
    </div>
  )
}

export default ColorPickerPanel