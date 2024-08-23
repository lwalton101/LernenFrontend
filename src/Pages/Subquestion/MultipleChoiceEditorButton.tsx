import {ChangeEvent, useEffect, useState} from "react";
import {useQuestion} from "../../context/QuestionContext.tsx";
import {Subquestion} from "../../Model/Subquestion.ts";

type ChangeFunction = (e: ChangeEvent<HTMLInputElement>) => void;
interface MultipleChoiceEditorButtonProps {
    onChange: ChangeFunction;
    onChecked: ChangeFunction;
    subquestion_id: number;
    optionIndex: number;
}

export function MultipleChoiceEditorButton(props: MultipleChoiceEditorButtonProps) {
    const { question, setQuestion } = useQuestion();
    const [subquestion, setSubquestion]: Subquestion = useState()
    const [options, setOptions]: Subquestion = useState([])
    const [answers, setAnswers]: Subquestion = useState([])
    useEffect(() => {
        if(!question){
            return;
        }
        const subquestion = question.subquestions[props.subquestion_id];
        setOptions([subquestion.option1, subquestion.option2, subquestion.option3, subquestion.option4]);
        setAnswers([subquestion.answer1, subquestion.answer2, subquestion.answer3, subquestion.answer4]);
    }, [question]);
    return (
        <button className={"bg-primary_dark p-2"}>
            <input value={options[props.optionIndex]} className={"bg-primary_mid"} onChange={props.onChange}/>
            <input checked={answers[props.optionIndex]} type={"checkbox"} onChange={props.onChecked}/>
        </button>
    );
}
