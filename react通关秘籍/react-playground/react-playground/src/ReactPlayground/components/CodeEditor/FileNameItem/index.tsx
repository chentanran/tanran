import classnames from 'classnames'

import styles from './index.module.scss'
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react'

export interface FileNameItemProps {
  value: string
  actived: boolean
  onEditComlete: (name: string) => void
  onClick: () => void
  creating: boolean
  onRemove: MouseEventHandler
  readonly: boolean
}

export const FileNameItem: React.FC<FileNameItemProps> = (props) => {
  const {
    value,
    actived = false,
    onClick,
    onEditComlete,
    creating,
    onRemove,
    readonly
  } = props

  const [name, setName] = useState(value)
  const [editing, setEditing] = useState(creating)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDoubleClick = () => {
    setEditing(true)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }

  useEffect(() => {
    if (creating) {
      inputRef?.current?.focus()
    }
  }, [creating])

  const hanldeInputBlue = () => {
    setEditing(false)
    onEditComlete(name)
  }

  return (
    <div
      className={classnames(styles['tab-item'], actived ? styles.actived : null)}
      onClick={onClick}
    >
      {
        editing ? (
          <input
            ref={inputRef}
            className={styles['tabs-item-input']}
            value={name}
            onBlur={hanldeInputBlue}
            onChange={(e) => setName(e.target.value)}
          ></input>
        ) : (
          <>
           <span onDoubleClick={!readonly ? handleDoubleClick : () => {}}>{name}</span>
           {
            !readonly ? <span style={{ marginLeft: 5, display: 'flex' }} onClick={onRemove}>
              <svg width='12' height='12' viewBox='0 0 24 24'>
              <line stroke='#999' x1='18' y1='6' x2='6' y2='18'></line>
              <line stroke='#999' x1='6' y1='6' x2='18' y2='18'></line>
              </svg>
            </span> : null
           }
         </>
        )
      }
    </div>
  )
}