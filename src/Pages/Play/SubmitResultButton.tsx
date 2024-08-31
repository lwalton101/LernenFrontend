import {useResult} from "../../context/ResultContext.tsx";
import {useQuestion} from "../../context/QuestionContext.tsx";
import {SubquestionResult} from "../../Model/SubquestionResult.ts";
import axiosInstance from "../../axiosInstance.ts";
import {useNavigate} from "react-router-dom";

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
    const navigator = useNavigate();
    async function onSubmitPress() {
        if (!question || !results) {
            return;
        }
        const subquestionResults: SubquestionResult[] = []
        for (let i = 0; i < question.subquestions.length; i++) {
            const subquestion = question.subquestions[i];
            const result = results[i];

            if (subquestion.type != 2) continue;

            var marks = 0;
            if (result.answer1 && ensureBoolean(subquestion.answer1)) marks += 1;
            if (result.answer1 && !ensureBoolean(subquestion.answer1)) marks -= 1;
            if (result.answer2 && ensureBoolean(subquestion.answer2)) marks += 1;
            if (result.answer2 && !ensureBoolean(subquestion.answer2)) marks -= 1;
            if (result.answer3 && ensureBoolean(subquestion.answer3)) marks += 1;
            if (result.answer3 && !ensureBoolean(subquestion.answer3)) marks -= 1;
            if (result.answer4 && ensureBoolean(subquestion.answer4)) marks += 1;
            if (result.answer4 && !ensureBoolean(subquestion.answer4)) marks -= 1;
            if (marks < 0) {
                marks = 0;
            }

            subquestionResults.push({
                subquestion_id: subquestion.subquestion_id as number,
                marks: marks
            })

            const response = await axiosInstance.post("/result/submit", {
                results: subquestionResults
            })

            if(response.status == 200){
                navigator(`/result?id=${question.question_id}`);
            }
        }
    }

    return (
        <button onClick={onSubmitPress}>
            Submit
        </button>
    );
}
