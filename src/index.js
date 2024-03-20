import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import * as vega from "vega";
// import embed from "vega-embed";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/my-app'>
       <App />
    </BrowserRouter>
  </React.StrictMode>
);



reportWebVitals();
