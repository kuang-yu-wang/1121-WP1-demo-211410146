import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {App_46} from './App_46';
import {BlogContentProvider_46} from "./BlogContext_46";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogContentProvider_46>
      <App_46 />
    </BlogContentProvider_46>
  </React.StrictMode>
);
