import {Navbar} from "../Navbar.tsx";
import {useEffect, useState} from "react";
import axiosInstance from "../axiosInstance.ts";
import {Question} from "../Model/Question.ts";
import {QuestionBox} from "./QuestionBox.tsx";

export function BrowsePage() {
    const [questions, setQuestions] = useState<Question[]>([])
    useEffect(() => {
        axiosInstance.get("/question/browse/50").then((r) => setQuestions(r.data)).catch((e) => console.log(e));
    }, []);
    return (
        <>
            <div className={"h-screen flex flex-col"}>
                <Navbar></Navbar>
                <div className={"flex-1 flex flex-col justify-center"}>
                    <h1 className={"text-4xl mt-3 text-center"}>Browse</h1>
                    <div className={"flex flex-1 flex-wrap justify-center"}>
                        {questions.map((question) => (
                            <div key={question.question_id}>
                                <QuestionBox question={question}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
