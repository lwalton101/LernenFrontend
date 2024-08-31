import {getDate, Question} from "../Model/Question.ts";
import {useEffect, useState} from "react";
import axiosInstance from "../axiosInstance.ts";
import {AxiosResponse} from "axios";
import {User} from "../Model/User.ts";
import defaultPFP from "../assets/default_pfp.png"
import {useNavigate} from "react-router-dom";
import {Rating} from "../Model/Rating.ts";

interface QuestionBoxProps {
    question: Question;
}

export function QuestionBox({question}: QuestionBoxProps) {
    const [uploader, setUploader] = useState<User | null>(null)
    const [rating, setRating] = useState<Rating | null>(null)
    const navigator = useNavigate();
    useEffect(() => {
        axiosInstance.get(`/user/${question.user_id}`).then((r: AxiosResponse<User>) => setUploader(r.data)).catch((e) => console.log(e));
        axiosInstance.get(`/rating/${question.question_id}`).then((r: AxiosResponse<Rating>) => setRating(r.data)).catch((e) => console.log(e));
    }, []);

    return (
        <div className={"bg-primary flex flex-col items-center m-4 rounded-xl w-[300px] h-[400px]"}>
            <div className={" flex flex-col p-3 items-center flex-1 w-full"}>
                <p className={"text-3xl text-center"}>{question.title}</p>
                <hr className="border-t-4 border-secondary w-11/12 my-2"/>
                <div className={"flex flex-row-reverse items-center"}>
                    {uploader?.profile_pic ? (<></>) : (
                        <img src={defaultPFP} alt={"The default profile picture"} className={"h-10"}></img>)}
                    <p className={"m-2"}>Author: {uploader?.username}</p>
                </div>
                <p className={"m-1"}>Subquestions: {question.subquestions.length}</p>
                <p className={"m-1"}>Upload Date: {getDate(question.created_at)}</p>
                <div className={"flex w-full gap-3 justify-center"}>
                    <p>Readability: {rating?.readability}/5</p>
                    <p>Difficulty: {rating?.difficulty}/5</p>
                </div>
                <div className={"flex flex-col items-center h-full w-full"}>
                    <p className={"m-1 text-xl"}>Tags</p>
                    <div className={"flex flex-wrap justify-center"}>
                        {question.tags.map((tag) => (
                            <p key={tag} className={"bg-gray-200 m-1 p-2 rounded-sm text-sm truncate flex-shrink min-w-0"}>
                                {tag}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <button className={"bg-primary_dark rounded-full m-1 text-white p-2 mb-3 w-5/6 "} onClick={() => navigator(`/play?id=${question.question_id}`)}>Play</button>
        </div>

    );
}
