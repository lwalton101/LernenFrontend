import {useQuestion} from "../context/QuestionContext.tsx";
import {TextSubquestionPlayer} from "./Play/TextSubquestionPlayer.tsx";
import {AudioSubquestionEditor} from "./Subquestion/AudioSubquestionEditor.tsx";
import {AudioSubquestionPlayer} from "./Play/AudioSubquestionPlayer.tsx";

interface PlaySectionProps {
    className: string
}

export function PlaySection(props: PlaySectionProps) {
    const { question, setQuestion } = useQuestion();
    return (
        <div className={props.className}>
            <h1 className={"text-5xl mt-3 mb-5"} >{question?.title}</h1>
            {question?.subquestions.map((subquestion) => (
                <div key={subquestion.subquestion_id} className={"w-full mt-3 mb-1"}>
                    {subquestion.type == 0 ? (<TextSubquestionPlayer subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : (<></>)}
                    {subquestion.type == 1 ? (<AudioSubquestionPlayer subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : (<></>)}
                </div>
            ))}
        </div>
    );
}
