import {useState} from "react";
import axiosInstance from "../axiosInstance.ts";
import {AxiosError} from "axios";
import {useNavigate} from "react-router-dom";
import {useUser} from "../context/UserContext.tsx";

export function LoginTab(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { refreshUser } = useUser();

    const navigator = useNavigate();

    async function onLoginButtonClicked() {
        try {
            const response = await axiosInstance.post('/auth/login', {
                password,
                email
            }, {

            });

            localStorage.setItem("token", response.data.token);
            await refreshUser();
            navigator("/root")

        } catch (err: unknown) {
            if(err instanceof AxiosError){
                if(!err.response){
                    throw err;
                }
                setErrorMessage(err.response.data.message);
            }
        }
    }

    return (
        <div className={"center-flex-column p-2"}>
            <div>{errorMessage != "" ? (<div className={"bg-red-400 p-3 rounded-2xl mt-2"}>{errorMessage}</div>) : (<></>)}</div>
            <div className={"center-flex-row flex p-2 justify-center items-center"}>
                <label className={"mr-2 w-24 text-right "}>Email: </label>
                <input className={"rounded p-2 flex-1"} placeholder={"Enter Email"} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className={"center-flex-row flex p-2 justify-center items-center"}>
                <label className={"mr-2 w-24 text-right"}>Password: </label>
                <input type={"password"} className={"rounded p-2 flex-1"} placeholder={"Enter Password"} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button
                className={"self-end mx-auto p-3 bg-primary_dark rounded-full mt-2 w-1/3 text-white"}
                onClick={onLoginButtonClicked}>
                Login
            </button>
        </div>
    )
}