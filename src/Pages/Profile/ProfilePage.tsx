import {Navbar} from "../../Navbar.tsx";
import {QuestionBox} from "../QuestionBox.tsx";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {User} from "../../Model/User.ts";
import axiosInstance from "../../axiosInstance.ts";
import {Question} from "../../Model/Question.ts";
import defaultPFP from "../../assets/default_pfp.png";

export function ProfilePage() {
    const [searchParams, _] = useSearchParams();
    const [id, setId] = useState("");
    const [user, setUser] = useState<User>();
    const [questions, setQuestions] = useState<Question[]>();
    useEffect(() => {
        setId(searchParams.get("id"));
        axiosInstance.get<User>(`/user/${searchParams.get("id")}`).then((r) => setUser(r.data)).catch(() => console.log("Error trying to get user"));
        axiosInstance.get<Question[]>(`/question/user/${searchParams.get("id")}`).then((r) => setQuestions(r.data)).catch(() => "Error getting user data");
    }, []);
    return (
        <>
            <div className={"h-screen flex flex-col"}>
                <Navbar></Navbar>
                <div className={"flex-1 flex flex-col justify-center"}>
                    <div className={"flex justify-center m-5 mb-2"}>
                        <div className={"flex items-center"}>
                            {user?.profile_pic ? (<></>) : (
                                <img src={defaultPFP} alt={"The default profile picture"} className={"h-14"}></img>)}
                            <p className={"m-2 text-5xl"}>{user?.username}</p>
                        </div>
                    </div>
                    <div className={"flex-1 flex flex-wrap justify-center"}>
                        {questions ? questions.map((question) => (
                            <div key={question.question_id}>
                                <QuestionBox question={question}></QuestionBox>
                            </div>
                        )) : (<></>)}
                    </div>
                </div>
            </div>
        </>
    );
}
