import {Question} from "../Model/Question.ts";

interface QuestionBoxProps {
    question: Question;
}

export function QuestionBox({question}: QuestionBoxProps) {
    return (
        <div>
            <p>{question.title}</p>
        </div>
    );
}
