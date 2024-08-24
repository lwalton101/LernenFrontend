import {useState} from "react";
import axiosInstance from "../axiosInstance.ts";
import {AxiosError} from "axios";
import {useNavigate} from "react-router-dom";
import {useUser} from "../context/UserContext.tsx";

export function SignupTab(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigator = useNavigate();
    const { refreshUser } = useUser();

    async function onSignupButtonClick() {
        try {
            await axiosInstance.post('/auth/signup', {
                username,
                password,
                email
            }, {});

            const loginResponse = await axiosInstance.post('/auth/login', {
                password,
                email
            }, {});

            localStorage.setItem("token", loginResponse.data.token);
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
        <div className={"flex flex-col justify-center items-center h-full w-full"}>
            <div className={"self-start w-full"}>
                {errorMessage != "" ? (<div className={"bg-red-400 p-3 rounded-2xl mt-2"}>{errorMessage}</div>) : (<></>)}

                <div className={"center-flex-row flex p-2 justify-center items-center"}>
                    <label className={"mr-2 w-24 text-right"}>Email: </label>
                    <input className={"rounded p-2"} placeholder={"Enter Email"}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className={"center-flex-row flex p-2 justify-center items-center"}>
                    <label className={"mr-2 w-24 text-right"}>Username: </label>
                    <input className={"rounded p-2"} placeholder={"Enter Username"}
                           onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className={"center-flex-row flex p-2 justify-center items-center"}>
                    <label className={"mr-2 w-24 text-right"}>Password: </label>
                    <input type={"password"} className={"rounded p-2"} placeholder={"Enter Password"}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>

            <button
                className={"self-end mx-auto p-3 bg-primary_dark rounded-full mt-2 w-1/3 text-white"}
                onClick={onSignupButtonClick}>
                Sign Up
            </button>
        </div>
    )
}

