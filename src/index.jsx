import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/error-page';
import SalesData from './routes/SalesData';
import Addme from '../SalesAnalysis/NoMatch';
import process from '../SalesAnalysis/removeData';
import SalesForcasting from './routes/Search/SalesForcasting';
import { UserLogin } from './routes/Search/UserLogin';
import { MainPage } from './routes/Search/MainPage';
import { UserProfile } from './routes/Search/UserProfile';
// import * as vega from "vega";
// import embed from "vega-embed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage
    />,
    errorElement: <ErrorPage />
  },
  {
    path: "/charts",
    element: <App 
    addDataHandler={true}
    Addme={Addme}
    />
  },
  {
    path: "/sales",
    element: <SalesData 
      addDataHandler={Addme}
      updateDataHandler={Addme}
      removeDataHandler={process}
    />
  },
  {
    path: "/forecast",
    element: <SalesForcasting />
  },
  {
    path: "/login",
    element: <UserLogin />
  },
  {
    path: "/profile",
    element: <UserProfile />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
