import {useQuestion} from "../../context/QuestionContext.tsx";
import {ChangeEvent} from "react";

interface AudioSubquestionEditorProps {
    subquestion_id: number;
}

export function AudioSubquestionEditor({subquestion_id}: AudioSubquestionEditorProps) {
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
            <textarea onChange={onTextChange}>
                {question?.subquestions[subquestion_id].text}
            </textarea>
            <button onClick={() => alert("TODO: Create this")}>Generate Audio</button>
        </>
    );
}
