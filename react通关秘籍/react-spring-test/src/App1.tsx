import React, { useEffect } from 'react';
import './App.css';
import { useSpringValue, animated, useSpring } from '@react-spring/web'

// mass： 质量（也就是重量），质量越大，回弹惯性越大，回弹的距离和次数越多
// tension: 张力，弹簧松紧程度，弹簧越紧，回弹速度越快
// friction：摩擦力，增加点阻力可以抵消质量和张力的效果

function App() {
  const width = useSpringValue(0, {
    config: {
      // duration: 2000,
      mass: 20,
      friction: 10,
      tension: 200
    }
  })

  useEffect(() => {
    width.start(300)
  }, [])

  return (
    <animated.div className="box" style={{ width }}></animated.div>
  );
}

export default App;
