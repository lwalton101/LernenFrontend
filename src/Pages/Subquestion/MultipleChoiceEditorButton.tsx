import {ChangeEvent, useEffect, useState} from "react";
import {useQuestion} from "../../context/QuestionContext.tsx";

type ChangeFunction = (e: ChangeEvent<HTMLInputElement>) => void;
interface MultipleChoiceEditorButtonProps {
    onChange: ChangeFunction;
    onChecked: ChangeFunction;
    subquestion_id: number;
    optionIndex: number;
}

export function MultipleChoiceEditorButton(props: MultipleChoiceEditorButtonProps) {
    const { question } = useQuestion();
    const [options, setOptions] = useState(["","","",""])
    const [answers, setAnswers] = useState([false, false,false,false])
    useEffect(() => {
        if(!question){
            return;
        }
        const subquestion = question.subquestions[props.subquestion_id];
        setOptions([subquestion.option1, subquestion.option2, subquestion.option3, subquestion.option4]);
        setAnswers([subquestion.answer1, subquestion.answer2, subquestion.answer3, subquestion.answer4]);
    }, [question]);
    return (
        <button className={"bg-primary_dark p-2 rounded-sm"}>
            <input value={options[props.optionIndex]} className={"bg-primary_mid rounded-md text-black placeholder-gray-700 mr-1"} onChange={props.onChange} placeholder={`Option ${props.optionIndex + 1}`}/>
            <input checked={answers[props.optionIndex]} type={"checkbox"} onChange={props.onChecked}/>
        </button>
    );
}
