import {useQuestion} from "../context/QuestionContext.tsx";
import {TextSubquestionEditor} from "./Subquestion/TextSubquestionEditor.tsx";
import {AudioSubquestionEditor} from "./Subquestion/AudioSubquestionEditor.tsx";
import {MultipleChoiceEditor} from "./Subquestion/MultipleChoiceEditor.tsx";
import {Subquestion} from "../Model/Subquestion.ts";

interface SubquestionEditorProps {
    className: string
}

export function SubquestionEditor(props: SubquestionEditorProps) {
    const { question, setQuestion } = useQuestion();

    function addSubquestion(type: number) {
        if(!question){
            return;
        }
        question.subquestions.push({
            answer1: false,
            answer2: false,
            answer3: false,
            answer4: false,
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            question_num: 0,
            type: type
        });

        setQuestion({...question, subquestions: question.subquestions})
    }

    return (
        <>
            <div className={props.className}>
                <h1 className={"text-5xl mt-3 mb-5"}>
                    Question Editor
                </h1>
                <div className={"bg-primary flex flex-col items-center p-5"}>
                    {question?.subquestions.map((subquestion) => (
                        <div className={"w-full"}>
                            {subquestion.type == 0 ? (<TextSubquestionEditor subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : ""}
                            {subquestion.type == 1 ? (<AudioSubquestionEditor subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : ""}
                            {subquestion.type == 2 ? (<MultipleChoiceEditor subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}></MultipleChoiceEditor>) : ""}
                        </div>
                    ))}
                </div>

                <button onClick={() => addSubquestion(0)}>Add Text</button>
                <button onClick={() => addSubquestion(1)}>Add Audio</button>
                <button onClick={() => addSubquestion(2)}>Add Multiple Choice</button>
            </div>
        </>
    );
}
