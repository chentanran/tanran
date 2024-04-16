import React, { useEffect } from 'react';
import './App.css';
import { useSpringValue, animated, useSpring, useSprings } from '@react-spring/web'

// mass： 质量（也就是重量），质量越大，回弹惯性越大，回弹的距离和次数越多
// tension: 张力，弹簧松紧程度，弹簧越紧，回弹速度越快
// friction：摩擦力，增加点阻力可以抵消质量和张力的效果

function App() {
  const [springs, api] = useSprings(3, () => {
    return {
      from: {
        width: 100,
        height: 100
      },
      to: {
        width: 300
      },
      config: {
        duration: 2000
      }
    }
  });

  function clickHandler() {
    api.start({
      width: 200,
      height: 200
    })
  }

  return (
    <div>
      {springs.map((styles, index) => (
      <animated.div key={index} style={styles} className='box'></animated.div>
    ))}
    </div>
  );
}

export default App;
