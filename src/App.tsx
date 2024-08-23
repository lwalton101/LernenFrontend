import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {HomePage} from "./Pages/HomePage.tsx";
import {RootPage} from "./Pages/RootPage.tsx";
import {LoginPage} from "./Pages/LoginPage.tsx";
import {UserProvider} from "./context/UserContext.tsx";
import {CreatePage} from "./Pages/CreatePage.tsx";
import {EditPage} from "./Pages/EditPage.tsx";

function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <UserProvider>
                    <HomePage />
                </UserProvider>
            ),
        },{
            path: "/root",
            element: <UserProvider>
                    <RootPage />
                </UserProvider>
        },{
            path: "/login",
            element: <UserProvider>
                <LoginPage />
            </UserProvider>
        },{
            path: "/create",
            element: <UserProvider>
                <CreatePage />
            </UserProvider>
        },{
            path: "/edit",
            element: <UserProvider>
                <EditPage />
            </UserProvider>
        }
    ]);

    return (
    <>
        <div className={"bg-bg h-full w-full"}>
            <RouterProvider router={router}></RouterProvider>
        </div>
    </>
  )
}

export default App
