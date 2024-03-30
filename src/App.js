import React, { StrictMode, Suspense, lazy } from 'react';
import ReactDom from 'react-dom/client';
import Header from './components/Header';
import {createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import {BodyContainer, About, Contact, Error, RestaurantDetails, Cart } from '../utils/pageListAsync';
import { Provider } from 'react-redux';
import appStore from '../redux/appStore';
const App = () => {
  return (
    <StrictMode>
      <Provider store={appStore}>
        <div className='box-border font-Nunito'>
          <Header />
          <Outlet />
        </div>
      </Provider>
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
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ],
    errorElement: <Error />
  }
  
])
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)