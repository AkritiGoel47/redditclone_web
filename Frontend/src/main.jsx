
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App.jsx";
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import axios from "axios";
import Index from './components/Index.jsx'
import Careers from "./pages/Careers.jsx";
import Brand from "./pages/Brand.jsx";
import Transparency from "./pages/Transparency.jsx";
import Press from "./pages/Press.jsx";


axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      
      {
        path: '',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path:'home',
        element:<Index />
      },
      {
        path:'careers',
        element:<Careers />

      },
      {
        path:'brand',
        element:<Brand />
      },
      {
        path:'transparency',
        element:<Transparency />

      },
      {
        path:'press',
        element:<Press />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);