import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/error-page';
import SalesData from './routes/SalesData';
// import * as vega from "vega";
// import embed from "vega-embed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/sales",
    element: <SalesData />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
