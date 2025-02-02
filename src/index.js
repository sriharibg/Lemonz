import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import OrderOnline from './pages/OrderOnline';
import Confirmation from './pages/Confirmation';
import WriteReview from './pages/WriteReview';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children: [
      {
        index: true, element:<Home />
      },
      {
        path: '/about',
        element:<About />
      },
      {
        path: '/menu',
        element: <Menu />
      },
      {
        path: '/reservations',
        element: <Reservations />
      },
      {
        path: '/orderonline',
        element: <OrderOnline />
      },
      {
        path: '/confirmation',
        element: <Confirmation />
      },
      {
        path: '/writereview',
        element: <WriteReview />
      }
    ]
  },

 
 
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
