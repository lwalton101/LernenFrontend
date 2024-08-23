import {MultipleChoiceEditorButton} from "./MultipleChoiceEditorButton.tsx";
import {ChangeEvent} from "react";
import {useQuestion} from "../../context/QuestionContext.tsx";

interface MultipleChoiceEditorProps {
    subquestion_id: number;
}

export function MultipleChoiceEditor({subquestion_id}: MultipleChoiceEditorProps) {
    const { question, setQuestion } = useQuestion();

    function updateOptions(e: ChangeEvent<HTMLInputElement>, index: number) {
        if(!question){
            return;
        }
        const subquestion = question.subquestions[subquestion_id];

        if(index == 0){
            subquestion.option1 = e.target.value;
        }
        if(index == 1){
            subquestion.option2 = e.target.value;
        }
        if(index == 2){
            subquestion.option3 = e.target.value;
        }
        if(index == 3){
            subquestion.option4 = e.target.value;
        }
        setQuestion({...question, subquestions: question.subquestions});
    }

    function updateAnswer(e: ChangeEvent<HTMLInputElement>, index: number) {
        if(!question){
            return;
        }
        const subquestion = question.subquestions[subquestion_id];

        if(index == 0){
            subquestion.answer1 = e.target.checked;
        }
        if(index == 1){
            subquestion.answer2 = e.target.checked;
        }
        if(index == 2){
            subquestion.answer3 = e.target.checked;
        }
        if(index == 3){
            subquestion.answer4 = e.target.checked;
        }
        setQuestion({...question, subquestions: question.subquestions});
    }

    return (
        <>
            <MultipleChoiceEditorButton onChange={(e) => updateOptions(e, 0)} onChecked={(e) => updateAnswer(e, 0)}/>
            <MultipleChoiceEditorButton onChange={(e) => updateOptions(e, 1)} onChecked={(e) => updateAnswer(e, 1)}/>
            <MultipleChoiceEditorButton onChange={(e) => updateOptions(e, 2)} onChecked={(e) => updateAnswer(e, 2)}/>
            <MultipleChoiceEditorButton onChange={(e) => updateOptions(e, 3)} onChecked={(e) => updateAnswer(e, 3)}/>
        </>
    )
}

