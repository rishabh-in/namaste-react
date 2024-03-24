import React, { StrictMode, Suspense, lazy } from 'react';
import ReactDom from 'react-dom/client';
import Header from './components/Header';
import {createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import {BodyContainer, About, Contact, Error, RestaurantDetails } from '../utils/pageListAsync';
const App = () => {
  return (
    <StrictMode>
      <div className='box-border font-Nunito'>
        <Header />
        <Outlet />
      </div>
    </StrictMode>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <BodyContainer />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />
      }
    ],
    errorElement: <Error />
  }
  
])
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)