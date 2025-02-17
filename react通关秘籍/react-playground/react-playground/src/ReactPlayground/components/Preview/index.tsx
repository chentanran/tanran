import { useContext, useEffect, useState, useRef } from "react"
import { PlaygroundContext } from "../../PlaygroundContext"
import CompilerWorker from "./compiler.worker?worker"
// import Editor from "../CodeEditor/Editor"
import iframeRaw from './iframe.html?raw'
import { IMPORT_MAP_FILE_NAME } from '../../files'
import { Message } from '../Message/index'
import { debounce } from "lodash-es"

interface MessageData {
  data: {
    type: 'ERROR'
    message: string
  }
}

export default function Preview() {
  const { files } = useContext(PlaygroundContext)
  const [compiledCode, setCompiledCode] = useState('')
  const [iframeUrl, setIframeUrl] = useState(getIframeUrl())

  const [error, setError] = useState('')

  const compileWorkerRef = useRef<Worker>()

  const handleMessage = (msg: MessageData) => {
    const { type, message } = msg.data
    if (type === 'ERROR') {
      setError(message)
    }
  }

  useEffect(() => {
    window.addEventListener('message', handleMessage)
    return () => {
      window.removeEventListener('message', handleMessage)
    }
  }, [])

  useEffect(() => {
    if(!compileWorkerRef.current) {
      compileWorkerRef.current = new CompilerWorker()
      compileWorkerRef.current.addEventListener('message', (data) => {
        console.log('worker', data)
        if (data.type === 'COMPILED_CODE') {
          setCompiledCode(data.data)
        } else {
          console.log('error', data)
        }
      })
    }
  }, [])

  useEffect(debounce(() => {
    // const res = compile(files)
    // setCompiledCode(res)
    compileWorkerRef.current?.postMessage({
      files
    })
  }, 500), [files])

  function getIframeUrl () {
    const res = iframeRaw.replace(
        '<script type="importmap"></script>', 
        `<script type="importmap">${
            files[IMPORT_MAP_FILE_NAME].value
        }</script>`
    ).replace(
        '<script type="module" id="appSrc"></script>',
        `<script type="module" id="appSrc">${compiledCode}</script>`,
    )
    return URL.createObjectURL(new Blob([res], { type: 'text/html' }))
  }

  useEffect(() => {
    setIframeUrl(getIframeUrl())
  }, [files[IMPORT_MAP_FILE_NAME].value, compiledCode])

  return <div style={{height: '100%'}}>
    <iframe 
      src={iframeUrl}
      style={{width: '100%', height: '100%', padding: 0, border: 'none'}}
    />
    <Message type="warn" content={error}></Message>
    {/* <Editor
      file={{
        name: 'dist.js',
        value: compiledCode,
        language: 'javascript'
      }}
    /> */}
  </div>
}
