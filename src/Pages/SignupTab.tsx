import {useState} from "react";
import axiosInstance from "../axiosInstance.ts";
import {AxiosError} from "axios";

export function SignupTab(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

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

            localStorage.setItem("token", loginResponse.data.token)
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
            <div>{errorMessage}</div>
            <div className={"center-flex-row flex p-2 justify-center items-center"}>
                <label className={"mr-2 w-24 text-right"}>Email: </label>
                <input className={"rounded p-2 flex-1"} placeholder={"Enter Email"} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className={"center-flex-row flex p-2 justify-center items-center"}>
                <label className={"mr-2 w-24 text-right"}>Username: </label>
                <input className={"rounded p-2 flex-1"} placeholder={"Enter Username"} onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div className={"center-flex-row flex p-2 justify-center items-center"}>
                <label className={"mr-2 w-24 text-right"}>Password: </label>
                <input type={"password"} className={"rounded p-2 flex-1"} placeholder={"Enter Password"} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button className={"p-3 bg-pink-400 rounded-full mt-4"} onClick={onSignupButtonClick}>Sign Up</button>
        </div>
    )
}

