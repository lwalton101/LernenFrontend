import { useState } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {HomePage} from "./Pages/HomePage.tsx";
import {RootPage} from "./Pages/RootPage.tsx";
import {LoginPage} from "./Pages/LoginPage.tsx";
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
      <div className={"bg-gray-200 h-full w-full"}>
          <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  )
}

export default App
