import {useQuestion} from "../../context/QuestionContext.tsx";
import {ChangeEvent} from "react";

interface TextSubquestionEditorProps {
    subquestion_id: number;
}

export function TextSubquestionEditor({subquestion_id}: TextSubquestionEditorProps) {
    const { question, setQuestion } = useQuestion();

    function onTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
        if(!question){
            return;
        }

        question.subquestions[subquestion_id].text = e.target.value;
        setQuestion({...question, subquestions: question.subquestions});
    }

    return (
        <>
            <textarea value={question?.subquestions[subquestion_id].text} onChange={onTextChange}>

            </textarea>
        </>
    );
}
