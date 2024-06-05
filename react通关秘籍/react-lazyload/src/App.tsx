import React from 'react';
import img1 from './img1.png';
import img2 from './img2.png';
// import LazyLoad from 'react-lazyload';
import LazyLoad from './MyLazyLoad';

const LazyGuang = React.lazy(() => import('./Guang'));

export default function App() {
  return (
    <div>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <p>xxxxxx</p>
      <LazyLoad placeholder={<div>loading...</div>}>
        {/* <img src={img1}/> */}
        <LazyGuang></LazyGuang>
      </LazyLoad>
      <LazyLoad placeholder={<div>loading...</div>} offset={200}>
        <img src={img2}/>
      </LazyLoad>
    </div>
  );
}
