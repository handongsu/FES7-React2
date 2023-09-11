import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ListRender from './ListRender';
import ReactFragment from './ReactFragment';
import ReactFragment2 from './ReactFragment2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReactFragment2 />
  </React.StrictMode>
);
