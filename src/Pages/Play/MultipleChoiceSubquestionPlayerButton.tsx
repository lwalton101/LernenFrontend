import {ChangeEvent, useEffect, useState} from "react";
import {useQuestion} from "../../context/QuestionContext.tsx";
import {useResult} from "../../context/ResultContext.tsx";

interface MultipleChoiceSubquestionPlayerButtonProps {
    subquestion_id: number;
    optionIndex: number;
}

export function MultipleChoiceSubquestionPlayerButton(props: MultipleChoiceSubquestionPlayerButtonProps) {
    const { question } = useQuestion();
    const { results, setResults } = useResult();
    const [options, setOptions] = useState(["","","",""])
    const [answers, setAnswers] = useState([false, false,false,false])
    const [active, setActive] = useState(false);

    useEffect(() => {
        if(!question){
            return;
        }
        const subquestion = question.subquestions[props.subquestion_id];
        setOptions([subquestion.option1, subquestion.option2, subquestion.option3, subquestion.option4]);
        setAnswers([subquestion.answer1, subquestion.answer2, subquestion.answer3, subquestion.answer4]);
    }, [question]);

    function onButtonPress() {
        if(!results){
            return;
        }
        const result = results[props.subquestion_id]
        if(!result){
            return;
        }

        if(props.optionIndex == 0){
            result.answer1 = !active;
        }
        if(props.optionIndex == 1){
            result.answer2 = !active;
        }
        if(props.optionIndex == 2){
            result.answer3 = !active;
        }
        if(props.optionIndex == 3){
            result.answer4 = !active;
        }
        setActive(!active);
        results[props.subquestion_id] = result;
        setResults(results);
    }

    return (
        <button className={"p-2 rounded-sm bg-primary_dark " + (active ? "border-black border-4" : "")} onClick={onButtonPress}>
            {options[props.optionIndex]}
        </button>
    );
}
