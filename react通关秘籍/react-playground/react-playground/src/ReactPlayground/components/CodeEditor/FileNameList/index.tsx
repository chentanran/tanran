import { useContext, useEffect, useState } from "react"
import { PlaygroundContext } from "../../../PlaygroundContext"
import { FileNameItem } from '../FileNameItem'
import styles from '../FileNameItem/index.module.scss'
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

    useEffect(() => {
      console.log(files, 'files', Object.keys(files))
      setTabs(Object.keys(files))
    }, [files])

    return (
      <div className={styles.tabs}>
        {
          tabs.map((item, index) => (
            <FileNameItem 
              key={item + index}
              onClick={() => setSelectedFileName(item)}
              value={item}
              actived={selectedFileName === item}
            ></FileNameItem>
          ))
        }
      </div>
    )
}
