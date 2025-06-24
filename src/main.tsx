/**
 * @file main.tsx
 * @author Cerror
 * @description React应用入口文件
 * @created 2025-01-20
 * @updated 2025-01-20
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * 创建React根节点并渲染应用
 */
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 