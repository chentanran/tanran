import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function App() {

  return <CopyToClipboard text={'神说要有光2'} onCopy={() => {
    console.log('done')
  }}>
    <div>复制</div>
  </CopyToClipboard>
}
