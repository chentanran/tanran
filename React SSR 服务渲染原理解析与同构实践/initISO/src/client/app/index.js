import React from 'react';
import ReactDom from 'react-dom/client';
import Index from '../pages/index';

//渲染index 组件
ReactDom.hydrateRoot(document.getElementById('root'), <Index />)