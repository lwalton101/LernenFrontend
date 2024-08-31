import {Subquestion} from "../../Model/Subquestion.ts";
import {useEffect, useState} from "react";
import axiosInstance from "../../axiosInstance.ts";

interface MarkViewerProps {
    subquestion: Subquestion;
}

export function MarkViewer(props: MarkViewerProps) {
    const [marks, setMarks] = useState(-1);
    const [totalMarks, setTotalMarks] = useState(-1);

    useEffect(() => {
        alert(props.subquestion.subquestion_id);
        axiosInstance.get(`/result/${props.subquestion?.subquestion_id}/get`).then(r => {
            setMarks(r.data.subquestion.marks)
            setTotalMarks(props.subquestion.answer1 + props.subquestion.answer2 + props.subquestion.answer3 + props.subquestion.answer4)
        });
    }, []);
    return (
        <div className={"marks flex items-center justify-center text-2xl"}>
            <p>{marks}/{totalMarks}</p>
        </div>
    );
}
