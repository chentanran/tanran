import React from 'react';
import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import App from './App';
import Toggle from './Toggle'
import { act } from 'react-dom/test-utils';
import useCounter from './useCounter';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('toogle', async () => {
  const { container } = render(<Toggle />)

  // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
  expect(container.querySelector('p')?.textContent).toBe('close')

  act(() => {
    fireEvent.click(container.querySelector('button')!)
  })

  // expect(container.querySelector('p')?.textContent).toBe('open')

  await waitFor(() => expect(container.querySelector('p')?.textContent).toBe('open'), {
    timeout: 3000
  })
})

test('useCounter', async () => {
  const hook = renderHook(() => useCounter(0))

  const [count, increment, decrement] = hook.result.current

  act(() => {
    increment(2)
  })

  expect(hook.result.current[0]).toBe(2)

  act(() => {
    decrement(3)
  })

  expect(hook.result.current[0]).toBe(-1)

  hook.unmount()
})

// render：渲染组件，返回 container 容器 dom 和其他的查询 api
// fireEvent：触发某个元素的某个事件
// createEvent：创建某个事件（一般不用这样创建）
// waitFor：等待异步操作完成再断言，可以指定 timeout
// act：包裹的代码会更接近浏览器里运行的方式
// renderHook：执行 hook，可以通过 result.current 拿到 hook 返回值