import {useQuestion} from "../../context/QuestionContext.tsx";
import {TextSubquestionPlayer} from "../Play/TextSubquestionPlayer.tsx";
import {AudioSubquestionPlayer} from "../Play/AudioSubquestionPlayer.tsx";
import {MultipleChoiceSubquestionPlayer} from "../Play/MultipleChoiceSubquestionPlayer.tsx";
import {MultipleChoiceSubquestionViewer} from "./MultipleChoiceSubquestionViewer.tsx";
import {MarkViewer} from "./MarkViewer.tsx";
import {useEffect, useState} from "react";
import axiosInstance from "../../axiosInstance.ts";
import {SubquestionResult} from "../../Model/SubquestionResult.ts";
import {useNavigate} from "react-router-dom";

interface ResultSectionProps {
    className: string
}

export function ResultSection(props: ResultSectionProps) {
    const {question} = useQuestion()
    const [results, setResults] :[SubquestionResult[], any] = useState([])
    const [resultLength, setResultLength] = useState(0)
    const navigator = useNavigate();
    useEffect(() => {
        if(!question){
            return;
        }
        axiosInstance.get(`/result/${question?.question_id}/get`).catch((e) => navigator(`/play?id=${question?.question_id}`))
    }, [question]);
    return (
        <div className={props.className}>
            <h1 className={"text-5xl mt-3 mb-5"} >{question?.title}</h1>
            {question?.subquestions.map((subquestion, index) => (
                <div key={subquestion.subquestion_id} className={"w-full mt-3 mb-1"}>
                    {subquestion.type == 0 ? (<TextSubquestionPlayer subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : (<></>)}
                    {subquestion.type == 1 ? (<AudioSubquestionPlayer subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : (<></>)}
                    {subquestion.type == 2 ? (<MultipleChoiceSubquestionViewer subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : (<></>)}
                    {subquestion.type == 2 ? (<MarkViewer subquestion={subquestion}/>) : (<></>)}
                </div>
            ))}
        </div>
    );
}
