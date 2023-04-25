import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import News from './Component/News/News.jsx';
import About from './Component/About/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch ('https://newsapi.org/v2/everything?q=tesla&from=2023-03-25&sortBy=publishedAt&apiKey=a222e2c96633465082bb3764c4d2276a')
      },
      {
        path: 'news',
        element: <News></News>,
        loader: ()=> fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a222e2c96633465082bb3764c4d2276a')
      },
      {
        path:'about',
        element:<About></About>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
