import {Navbar} from "../Navbar.tsx";
import {useState} from "react";
import axiosInstance from "../axiosInstance.ts";
import {useUser} from "../context/UserContext.tsx";
import {AxiosResponse} from "axios";
import {useNavigate} from "react-router-dom";

export function CreatePage() {
    const [title, setTitle] = useState("");
    const navigator = useNavigate();
    const user = useUser();
    async function onCreatePressed() {
        if(!title){
            return;
        }
        const response: AxiosResponse<{message, id}> = await axiosInstance.post("/question/create", {
            title: title,
            user_id: user?.user_id,
            created_at: Date.now(),
            published: false,
            tags: ["new-question"],
            subquestions: []
        });
        console.log(response.data)
        navigator(`/edit?${response.data.id}`);
    }

    return (
        <>
            <div className={"h-screen"}>
                <Navbar></Navbar>
                <div className={"h-full flex items-center justify-center"}>
                    <div className={"bg-primary rounded p-3 text-center"}>
                        <h1 className={"text-xl mb-2"}>Create Question</h1>
                        <input type={"text"} placeholder={"Title"} className={"p-1"} onChange={(e) => setTitle(e.target.value)}/>
                        <button
                            className={"self-end mx-auto p-3 bg-primary_dark rounded-full mt-2 w-1/3 text-white"} onClick={onCreatePressed}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
