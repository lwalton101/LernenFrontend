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

            console.log('Login successful:', response.data);
        } catch (e: AxiosError) {
            setErrorMessage(e.response.data.message);
        }
    }

    return (
        <div className={"center-flex-column"}>
            <div>{errorMessage}</div>
            <div className={"center-flex-row form-input"}>
                <label>Email: </label>
                <input placeholder={"Enter Email:"} onChange={(e) => setEmail(e.target.value)}/>
            </div>



            <div className={"center-flex-row form-input"}>
                <label>Password: </label>
                <input placeholder={"Enter Password:"} onChange={(e) => setPassword(e.target.value)}/>
                <img src={info} width={25} height={25} alt={"info button"}></img>
            </div>

            <button onClick={onLoginButtonClicked}>Login</button>
        </div>
    )
}