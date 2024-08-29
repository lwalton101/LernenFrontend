import {useQuestion} from "../context/QuestionContext.tsx";
import {TextSubquestionPlayer} from "./Play/TextSubquestionPlayer.tsx";
import {AudioSubquestionPlayer} from "./Play/AudioSubquestionPlayer.tsx";
import {MultipleChoiceSubquestionPlayer} from "./Play/MultipleChoiceSubquestionPlayer.tsx";
import {ResultProvider, useResult} from "../context/ResultContext.tsx";
import {SubmitResultButton} from "./Play/SubmitResultButton.tsx";

interface PlaySectionProps {
    className: string
}

export function PlaySection(props: PlaySectionProps) {
    const { question, setQuestion } = useQuestion();

    return (
        <div className={props.className}>
            <h1 className={"text-5xl mt-3 mb-5"} >{question?.title}</h1>
            <ResultProvider id={question?.question_id as string}>
                {question?.subquestions.map((subquestion) => (
                    <div key={subquestion.subquestion_id} className={"w-full mt-3 mb-1"}>
                        {subquestion.type == 0 ? (<TextSubquestionPlayer subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : (<></>)}
                        {subquestion.type == 1 ? (<AudioSubquestionPlayer subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : (<></>)}
                        {subquestion.type == 2 ? (<MultipleChoiceSubquestionPlayer subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : (<></>)}
                    </div>
                ))}
            </ResultProvider>
        </div>
    );
}
