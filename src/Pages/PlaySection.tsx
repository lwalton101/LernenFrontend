import {useQuestion} from "../context/QuestionContext.tsx";
import {TextSubquestionPlayer} from "./Play/TextSubquestionPlayer.tsx";
import {AudioSubquestionPlayer} from "./Play/AudioSubquestionPlayer.tsx";
import {MultipleChoiceSubquestionPlayer} from "./Play/MultipleChoiceSubquestionPlayer.tsx";
import {ResultProvider} from "../context/ResultContext.tsx";
import {SubmitResultButton} from "./Play/SubmitResultButton.tsx";
import axiosInstance from "../axiosInstance.ts";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

interface PlaySectionProps {
    className: string
}

export function PlaySection(props: PlaySectionProps) {
    const { question } = useQuestion();
    const navigator = useNavigate();

    useEffect(() => {
        if(!question){
            return;
        }
        axiosInstance.get(`/result/${question.question_id}/get`).then(r => {
            if(r.status !== 200){
                return;
            }
            navigator(`/result?id=${question.question_id}`)
        });
    }, [question]);


    return (
        <div className={props.className}>
            <h1 className={"text-5xl mt-3 mb-5 text-center"} >{question?.title}</h1>
            <ResultProvider id={question?.question_id as string}>
                {question?.subquestions.map((subquestion) => (
                    <div key={subquestion.subquestion_id} className={"w-full mt-3 mb-1"}>
                        {subquestion.type == 0 ? (<TextSubquestionPlayer subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : (<></>)}
                        {subquestion.type == 1 ? (<AudioSubquestionPlayer/>) : (<></>)}
                        {subquestion.type == 2 ? (<MultipleChoiceSubquestionPlayer subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : (<></>)}
                    </div>
                ))}
                <SubmitResultButton></SubmitResultButton>
            </ResultProvider>
        </div>
    );
}
