import {useResult} from "../../context/ResultContext.tsx";
import {useQuestion} from "../../context/QuestionContext.tsx";
import {c} from "vite/dist/node/types.d-aGj9QkWt";

function ensureBoolean(val: any){
    if(val == 0){
        return false;
    } else if(val == 1){
        return true;
    }
}

export function SubmitResultButton() {
    const {results} = useResult();
    const {question} = useQuestion();
    function onSubmitPress() {
        if(!question || !results){
            return;
        }

        for (let i = 0; i < question.subquestions.length; i++) {
            const subquestion = question.subquestions[i];
            const result = results[i];

            if(subquestion.type != 2) continue;

            var marks = 0;
            if(result.answer1 && ensureBoolean(subquestion.answer1)) marks += 1;
            if(result.answer1 && !ensureBoolean(subquestion.answer1)) marks -= 1;
            if(result.answer2 && ensureBoolean(subquestion.answer2)) marks += 1;
            if(result.answer2 && !ensureBoolean(subquestion.answer2)) marks -= 1;
            if(result.answer3 && ensureBoolean(subquestion.answer3)) marks += 1;
            if(result.answer3 && !ensureBoolean(subquestion.answer3)) marks -= 1;
            if(result.answer4 && ensureBoolean(subquestion.answer4)) marks += 1;
            if(result.answer4 && !ensureBoolean(subquestion.answer4)) marks -= 1;
            if(marks < 0){
                marks = 0;
            }
        }
    }

    return (
        <button onClick={onSubmitPress}>
            Submit
        </button>
    );
}
