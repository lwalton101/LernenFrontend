import {useEffect} from "react";
import axiosInstance from "../axiosInstance.ts";
import {Navbar} from "../Navbar.tsx";

export function RootPage(){
    useEffect(() => {
        axiosInstance.get("/auth/testProtected").then((r) => console.log(r.data))
    }, []);
    return(
        <>
            <div className={"flex flex-col h-screen"}>
                <Navbar></Navbar>
            </div>
        </>
    )
}