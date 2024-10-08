import {useQuestion} from "../context/QuestionContext.tsx";
import {TextSubquestionEditor} from "./Subquestion/TextSubquestionEditor.tsx";
import {AudioSubquestionEditor} from "./Subquestion/AudioSubquestionEditor.tsx";
import {MultipleChoiceEditor} from "./Subquestion/MultipleChoiceEditor.tsx";

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
            answer1: 0,
            answer2: 0,
            answer3: 0,
            answer4: 0,
            option1: "",
            option2: "",
            option3: "",
            option4: "",
            question_num: 0,
            type: type
        });

        setQuestion({...question, subquestions: question.subquestions})
    }

    function deleteSubquestion(index: number){
        if(!question){
            return;
        }

        const subquestions = question.subquestions;
        subquestions.splice(index,1);
        setQuestion({...question, subquestions: subquestions});
    }

    return (
        <>
            <div className={props.className}>
                <h1 className={"text-5xl mt-3 mb-5"}>
                    Question Editor
                </h1>
                <div className={"bg-primary flex flex-col items-center p-5 w-3/5"}>
                    {question?.subquestions.map((subquestion) => (
                        <div className={"w-full"}>
                            {subquestion.type == 0 ? (<TextSubquestionEditor delete={deleteSubquestion} subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : ""}
                            {subquestion.type == 1 ? (<AudioSubquestionEditor delete={deleteSubquestion} subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}/>) : ""}
                            {subquestion.type == 2 ? (<MultipleChoiceEditor delete={deleteSubquestion} subquestion_id={"subquestions" in question ? question.subquestions.indexOf(subquestion) :-1}></MultipleChoiceEditor>) : ""}
                        </div>
                    ))}
                </div>

                <div className={"flex items-center w-2/3"}>
                    <button onClick={() => addSubquestion(0)} className={"flex-1 p-5 bg-primary_mid rounded-xl m-3"}>Add Text</button>
                    <button onClick={() => addSubquestion(1)} className={"flex-1 p-5 bg-primary_mid rounded-xl m-3"}>Add Audio</button>
                    <button onClick={() => addSubquestion(2)} className={"flex-1 p-5 bg-primary_mid rounded-xl m-3"}>Add Multiple Choice</button>
                </div>

            </div>
        </>
    );
}
