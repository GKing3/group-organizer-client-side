import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import App from './App.jsx'

import { MembersPage } from './pages/members-page/MembersPage.jsx'
import './index.css'
import { HomePage } from './pages/home-page/HomePage.jsx'
import { ErrorPage } from './pages/error-page/ErrorPage.jsx'
import { MembersDetailsPage } from './pages/members-page/MembersDetailsPage.jsx'
import { ContextProvider } from './contexts/GroupOrganizerContext.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/members',
        element: <MembersPage/>,
      },
      {
        path: '/members/:id',
        element: <MembersDetailsPage/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router = {routes}/>
    </ContextProvider>
  </React.StrictMode>,
)
