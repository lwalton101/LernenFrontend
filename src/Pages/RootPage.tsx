import {Navbar} from "../Navbar.tsx";
import {useUser} from "../context/UserContext.tsx";

export function RootPage(){
    const user = useUser();
    return(
        <>
            <div className={"flex flex-col h-screen"}>
                <Navbar></Navbar>
                <div className={"flex flex-col h-full"}>
                    <h1>
                        Welcome back, {user ? user.username : ""}
                    </h1>
                </div>
            </div>
        </>
    )
}