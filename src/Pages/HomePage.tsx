import {useNavigate} from "react-router-dom";
import {useAxiosInterceptor} from "../axiosInstance.ts";

export function HomePage(){
    const navigate = useNavigate();
    return(
        <>
            <h1>Homepage</h1>
            <button onClick={() => navigate("/login")}>Login</button>
        </>
    )
}