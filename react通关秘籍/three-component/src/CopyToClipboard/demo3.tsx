import CopyToClipboard from './react-copy-to-clipboard';

export default function App() {

  return <CopyToClipboard text={'神说要有光2'} onCopy={() => {
    console.log('done')
  }}>
    <div onClick={(e) => { console.log(e) }}>复制</div>
  </CopyToClipboard>
}
