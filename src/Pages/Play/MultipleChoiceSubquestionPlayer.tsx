import {MultipleChoiceSubquestionPlayerButton} from "./MultipleChoiceSubquestionPlayerButton.tsx";

interface MultipleChoicePlayerProps {
    subquestion_id: number;
}

export function MultipleChoiceSubquestionPlayer(props: MultipleChoicePlayerProps) {
    return (
        <div className={"flex flex-col items-center justify-center mt-4 mb-4"}>
            <div className={"grid grid-cols-2 grid-rows-2 gap-2 w-2/3 mb-2"}>
                <MultipleChoiceSubquestionPlayerButton optionIndex={0} subquestion_id={props.subquestion_id}/>
                <MultipleChoiceSubquestionPlayerButton optionIndex={1} subquestion_id={props.subquestion_id}/>
                <MultipleChoiceSubquestionPlayerButton optionIndex={2} subquestion_id={props.subquestion_id}/>
                <MultipleChoiceSubquestionPlayerButton optionIndex={3} subquestion_id={props.subquestion_id}/>
            </div>
        </div>
    )
}
