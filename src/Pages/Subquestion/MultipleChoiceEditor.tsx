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
        <div className={"flex flex-col items-center justify-center mt-4 mb-4"}>
            <div className={"grid grid-cols-2 grid-rows-2 gap-2 w-2/3 mb-2"}>
                <MultipleChoiceEditorButton optionIndex={0} subquestion_id={subquestion_id} onChange={(e) => updateOptions(e, 0)} onChecked={(e) => updateAnswer(e, 0)}/>
                <MultipleChoiceEditorButton optionIndex={1} subquestion_id={subquestion_id} onChange={(e) => updateOptions(e, 1)} onChecked={(e) => updateAnswer(e, 1)}/>
                <MultipleChoiceEditorButton optionIndex={2} subquestion_id={subquestion_id} onChange={(e) => updateOptions(e, 2)} onChecked={(e) => updateAnswer(e, 2)}/>
                <MultipleChoiceEditorButton optionIndex={3} subquestion_id={subquestion_id} onChange={(e) => updateOptions(e, 3)} onChecked={(e) => updateAnswer(e, 3)}/>
            </div>
            <button onClick={() => alert("TODO: Create this")} className={"bg-primary_dark rounded-full m-3 mt-0 text-white p-2 w-1/3"}>Delete</button>
        </div>
    )
}

