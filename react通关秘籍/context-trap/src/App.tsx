// import { create } from 'zustand'
import { create } from './zustand'

const useXxxStore = create((set) => ({
  aaa: '',
  bbb: '',
  updateAaa: (value: any) => set(() => ({ aaa: value })),
  updateBbb: (value: any) => set(() => ({ bbb: value })),
}))

export default function App() {
  const updateAaa = useXxxStore((state) => state.updateAaa)
  const aaa = useXxxStore((state) => state.aaa)

  useXxxStore.subscribe((state) => {
    console.log(useXxxStore.getState());
  })

  return (
    <div>
        <input
          onChange={(e) => updateAaa(e.currentTarget.value)}
          value={aaa}
        />
        <Bbb></Bbb>
    </div>
  )
}

function Bbb() {
  return <div>
    <Ccc></Ccc>
  </div>
}

function Ccc() {
  const aaa = useXxxStore((state) => state.aaa)
  return <p>hello, {aaa}</p>
}
