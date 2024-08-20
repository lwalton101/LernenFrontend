import info from "../assets/info.svg";
import {useState} from "react";
import axiosInstance from "../axiosInstance.ts";
import {AxiosError} from "axios";
import {useNavigate} from "react-router-dom";

export function LoginTab(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const navigator = useNavigate();

    async function onLoginButtonClicked() {
        try {
            const response = await axiosInstance.post('/auth/login', {
                password,
                email
            }, {

            });

            localStorage.setItem("token", response.data.token);
            navigator("/root");
        } catch (e: AxiosError) {
            setErrorMessage(e.response.data.message);
        }
    }

    return (
        <div className={"center-flex-column p-2"}>
            <div>{errorMessage}</div>
            <div className={"center-flex-row flex p-2 justify-center items-center"}>
                <label className={"mr-2 w-24 text-right "}>Email: </label>
                <input className={"rounded p-2 flex-1"} placeholder={"Enter Email"} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className={"center-flex-row flex p-2 justify-center items-center"}>
                <label className={"mr-2 w-24 text-right"}>Password: </label>
                <input type={"password"} className={"rounded p-2 flex-1"} placeholder={"Enter Password"} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <button className={"p-3 bg-pink-400 rounded-full mt-4"} onClick={onLoginButtonClicked}>Login</button>
        </div>
    )
}