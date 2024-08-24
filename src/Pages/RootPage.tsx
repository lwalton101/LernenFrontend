import {Navbar} from "../Navbar.tsx";
import {useUser} from "../context/UserContext.tsx";
import {QuestionBox} from "./QuestionBox.tsx";
import {useEffect, useState} from "react";
import axiosInstance from "../axiosInstance.ts";
import {Question} from "../Model/Question.ts";
import {AxiosResponse} from "axios";

export function RootPage(){
    const {user} = useUser();
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        axiosInstance.get("/question/browse/1").then((r: AxiosResponse) => setQuestions(r.data)).catch((e) => console.log(e));
    }, []);
    return(
        <>
            <div className={"flex flex-col h-screen"}>
                <Navbar></Navbar>
                <div className={"flex flex-col h-full items-center"}>
                    <h1>
                        Welcome back, {user ? user.username : ""}
                    </h1>
                    <div className={"flex gap-15 flex-wrap items-center"}>
                        {questions.map((question: Question) => (
                            <div key={question.question_id} className={"f"}>
                                <QuestionBox question={question}/>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </>
    )
}