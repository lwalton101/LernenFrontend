import {useQuestion} from "../context/QuestionContext.tsx";

export function SubquestionEditor() {
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
            <div>
                <h1>
                    Subquestion Editor
                </h1>
                {question?.subquestions.map((subquestion) => (
                    <div>
                        {subquestion.type == 0 ? (<div>0</div>) : ""}
                        {subquestion.type == 1 ? (<div>1</div>) : ""}
                        {subquestion.type == 2 ? (<div>2</div>) : ""}
                    </div>
                ))}
                <button onClick={() => addSubquestion(0)}>Add Text</button>
                <button onClick={() => addSubquestion(1)}>Add Audio</button>
                <button onClick={() => addSubquestion(2)}>Add Multiple Choice</button>
            </div>
        </>
    );
}
