import {useQuestion} from "../../context/QuestionContext.tsx";

class TextSubquestionPlayerProps {
    subquestion_id: number;
}

export function TextSubquestionPlayer(props: TextSubquestionPlayerProps) {
    const { question, setQuestion } = useQuestion();
    return (
        <div className={"flex flex-col w-full items-center "}>
            <p className={"m-3 w-2/3 text-center"}>{question?.subquestions[props.subquestion_id].text}</p>
        </div>
    );
}
