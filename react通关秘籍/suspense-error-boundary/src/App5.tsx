import { Suspense } from "react";

let data, promise;
function fetchData() {
  console.log(data, '----data')
  if (data) return data;
  promise = new Promise(resolve => {
    setTimeout(() => {
      data = '取到的数据'
      resolve()
    }, 2000)
  })
  throw promise;
}

function Content() {
  const data1 = fetchData();
  console.log(data1, 'data')
  return <p>{data1}</p>
}

export default function App() {
  return (
    <Suspense fallback={'loading data'}>
      <Content />
    </Suspense>
  )
}