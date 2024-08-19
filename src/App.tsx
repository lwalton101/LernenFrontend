import { useState } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {HomePage} from "./Pages/HomePage.tsx";
import {RootPage} from "./Pages/RootPage.tsx";
import {LoginPage} from "./Pages/LoginPage.tsx";
import "./main.css"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },{
            path: "/root",
            element: <RootPage />,
        },{
            path: "/login",
            element: <LoginPage/>,
        },
    ]);

    return (
    <>
      <div>
          <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
