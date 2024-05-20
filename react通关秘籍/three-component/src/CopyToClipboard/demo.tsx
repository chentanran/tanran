import copy from 'copy-to-clipboard';

export default function App() {

  function onClick() {
    const res = copy('神说要有光666')
    console.log('done', res);
  }

  return <div onClick={onClick}>复制</div>
}