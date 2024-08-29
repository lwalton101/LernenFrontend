import {ChangeEvent, useEffect, useState} from "react";
import {useQuestion} from "../../context/QuestionContext.tsx";
import {useResult} from "../../context/ResultContext.tsx";

interface MultipleChoiceSubquestionPlayerButtonProps {
    subquestion_id: number;
    optionIndex: number;
}

export function MultipleChoiceSubquestionViewerButton(props: MultipleChoiceSubquestionPlayerButtonProps) {
    const { question } = useQuestion();
    const [options, setOptions] = useState(["","","",""])

    useEffect(() => {
        if(!question){
            return;
        }
        const subquestion = question.subquestions[props.subquestion_id];
        setOptions([subquestion.option1, subquestion.option2, subquestion.option3, subquestion.option4]);
    }, [question]);

    return (
        <button className={"p-2 rounded-sm bg-primary_dark "} >
            {options[props.optionIndex]}
        </button>
    );
}
