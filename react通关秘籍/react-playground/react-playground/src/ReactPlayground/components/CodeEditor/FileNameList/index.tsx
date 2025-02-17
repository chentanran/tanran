import { useContext, useEffect, useState } from "react"
import { PlaygroundContext } from "../../../PlaygroundContext"
import { FileNameItem } from '../FileNameItem'
import styles from '../FileNameItem/index.module.scss'
import { APP_COMPONENT_FILE_NAME, ENTRY_FILE_NAME, IMPORT_MAP_FILE_NAME } from "../../../files"
export default function FileNameList() {
    const { 
        files, 
        removeFile, 
        addFile, 
        updateFileName, 
        selectedFileName,
        setSelectedFileName
    } = useContext(PlaygroundContext)

    const [tabs, setTabs] = useState([''])
    const [creating, setCreating] = useState(false)

    useEffect(() => {
      console.log(files, 'files', Object.keys(files))
      setTabs(Object.keys(files))
    }, [files])

    const handleEditComplete = (name: string, prevName: string) => {
      updateFileName(prevName, name)
      setSelectedFileName(name)

      setCreating(false)
    }

    const addTab = () => {
      addFile('Comp' + Math.random().toString().slice(2, 6) + '.tsx')
      setCreating(true)
    }

    const handleRemove = (name: string) => {
      removeFile(name)
      setSelectedFileName(ENTRY_FILE_NAME)
    }

    const readonlyFileNames = [ENTRY_FILE_NAME, IMPORT_MAP_FILE_NAME, APP_COMPONENT_FILE_NAME];

    return (
      <div className={styles.tabs}>
        {
          tabs.map((item, index) => (
            <FileNameItem 
              key={item + index}
              onClick={() => setSelectedFileName(item)}
              value={item}
              creating={creating && index === tabs.length - 1}
              actived={selectedFileName === item}
              onEditComlete={(name: string) => { handleEditComplete(name, item) }}
              onRemove={(e) => {
                e.stopPropagation()
                handleRemove(item)
              }}
              readonly={readonlyFileNames.includes(item)}
            ></FileNameItem>
          ))
        }
        <div className={styles.add} onClick={addTab}>+</div>
      </div>
    )
}
