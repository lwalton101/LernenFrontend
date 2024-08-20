import {useEffect} from "react";
import axiosInstance from "../axiosInstance.ts";

export function RootPage(){
    useEffect(() => {
        axiosInstance.get("/auth/testProtected").then((r) => console.log(r.data))
    }, []);
    return(
        <>
            <h1>Root</h1>
        </>
    )
}