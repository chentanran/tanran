import { setupTypeAcquisition } from '@typescript/ata'
import typescripts from 'typescript'

export function createATA(onDownloadFile: (code: string, path: string) => void) {
  const ata = setupTypeAcquisition({
    projectName: 'my-ata',
    typescript: typescripts,
    logger: console,
    delegate: {
      receivedFile: (code, path) => {
        console.log('receivedFile', path)
        onDownloadFile(code, path)
      }
    }
  })

  return ata
}