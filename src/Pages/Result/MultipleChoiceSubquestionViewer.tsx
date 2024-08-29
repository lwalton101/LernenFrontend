import {useQuestion} from "../../context/QuestionContext.tsx";
import {ChangeEvent} from "react";
import {MultipleChoiceEditorButton} from "../Subquestion/MultipleChoiceEditorButton.tsx";
import {MultipleChoiceSubquestionViewerButton} from "./MultipleChoiceSubquestionViewerButton.tsx";

interface MultipleChoicePlayerProps {
    subquestion_id: number;
}

export function MultipleChoiceSubquestionViewer(props: MultipleChoicePlayerProps) {
    const { question, setQuestion } = useQuestion();
    return (
        <div className={"flex flex-col items-center justify-center mt-4 mb-1"}>
            <div className={"grid grid-cols-2 grid-rows-2 gap-2 w-2/3 mb-2"}>
                <MultipleChoiceSubquestionViewerButton optionIndex={0} subquestion_id={props.subquestion_id}/>
                <MultipleChoiceSubquestionViewerButton optionIndex={1} subquestion_id={props.subquestion_id}/>
                <MultipleChoiceSubquestionViewerButton optionIndex={2} subquestion_id={props.subquestion_id}/>
                <MultipleChoiceSubquestionViewerButton optionIndex={3} subquestion_id={props.subquestion_id}/>
            </div>
        </div>
    )
}
