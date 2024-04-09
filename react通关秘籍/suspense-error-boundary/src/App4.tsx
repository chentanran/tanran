import { useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function Bbb() {
  useEffect(() => {
    throw new Error('error')
  }, [])

  return <div>bbb</div>
}

function Aaa() {
  return <Bbb></Bbb>
}

export default function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent={({ error }) => {
        return (
          <div>
            <p>出错了：</p>
            <div>{error.message}</div>
          </div>
        )
      }}>
        <Aaa />
      </ErrorBoundary>
    </div>
  )
}