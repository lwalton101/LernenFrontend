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
import {BrowsePage} from "./Pages/BrowsePage.tsx";
import {PlayPage} from "./Pages/PlayPage.tsx";
import {ResultPage} from "./Pages/Result/ResultPage.tsx";
import {SearchPage} from "./Pages/Search/SearchPage.tsx";
import {ProfilePage} from "./Pages/Profile/ProfilePage.tsx";

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
        },
        {
            path:"/browse",
            element: <UserProvider>
                <BrowsePage />
                    </UserProvider>
        },
        {
            path:"/play",
            element: <UserProvider>
                <PlayPage />
            </UserProvider>
        },
        {
            path:"/result",
            element: <UserProvider>
                <ResultPage />
            </UserProvider>
        },
        {
            path:"/search",
            element: <UserProvider>
                <SearchPage />
            </UserProvider>
        },
        {
            path:"/profile",
            element: <UserProvider>
                <ProfilePage />
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
