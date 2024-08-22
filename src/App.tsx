import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {HomePage} from "./Pages/HomePage.tsx";
import {RootPage} from "./Pages/RootPage.tsx";
import {LoginPage} from "./Pages/LoginPage.tsx";
import {UserProvider} from "./context/UserContext.tsx";

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
        <UserProvider>
            <div className={"bg-bg h-full w-full"}>
                <RouterProvider router={router}></RouterProvider>
            </div>
        </UserProvider>
    </>
  )
}

export default App
