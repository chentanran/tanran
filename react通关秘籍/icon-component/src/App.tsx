import React from 'react';
import { IconAdd } from './Icon/icons/IconAdd'
import { IconEmail } from './Icon/icons/IconEmail'
import { createFromIconfont } from './Icon/createFrontIconfont'

const IconFont = createFromIconfont('//at.alicdn.com/t/c/font_4443338_a2wwqhorbk4.js')

function App() {
  return (
    <div style={{ padding: '50px' }}>
      {/* <IconAdd size={'40px'}></IconAdd>
      <IconEmail spin></IconEmail> */}
      <IconFont type="icon-shouye-zhihui" size="40px"></IconFont>
      <IconFont type="icon-gerenzhongxin-zhihui" fill="blue" size="40px"></IconFont>
    </div>
  );
}

export default App;
