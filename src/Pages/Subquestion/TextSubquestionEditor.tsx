import {useQuestion} from "../../context/QuestionContext.tsx";
import {ChangeEvent} from "react";

interface TextSubquestionEditorProps {
    subquestion_id: number;
    delete: (index: number) => void;
}

export function TextSubquestionEditor(props: TextSubquestionEditorProps) {
    const { question, setQuestion } = useQuestion();

    function onTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
        if(!question){
            return;
        }

        question.subquestions[props.subquestion_id].text = e.target.value;
        setQuestion({...question, subquestions: question.subquestions});
    }

    return (
        <>
            <div className={"flex flex-col w-full items-center"}>
                <textarea value={question?.subquestions[props.subquestion_id].text} onChange={onTextChange} className={"m-3 w-2/3 border-primary_dark border-2"}/>
                <button onClick={() => props.delete(props.subquestion_id)} className={"bg-primary_dark rounded-full m-3 text-white p-2 w-1/3"}>Delete</button>
            </div>
        </>
    );
}
