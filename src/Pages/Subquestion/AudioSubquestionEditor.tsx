import {useQuestion} from "../../context/QuestionContext.tsx";
import {ChangeEvent} from "react";
import axiosInstance from "../../axiosInstance.ts";
import {AudioGenerationModel} from "../../Model/AudioGenerationModel.ts";

interface AudioSubquestionEditorProps {
    subquestion_id: number;
    delete: (index: number) => void;
}

export function AudioSubquestionEditor(props: AudioSubquestionEditorProps) {
    const { question, setQuestion } = useQuestion();

    function onTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
        if(!question){
            return;
        }

        question.subquestions[props.subquestion_id].text = e.target.value;
        setQuestion({...question, subquestions: question.subquestions});
    }

    async function onGenerateAudioPressed() {
        if(!question){
            return;
        }

        axiosInstance.post<AudioGenerationModel>("/question/generateAudio", {
            text: question.subquestions[props.subquestion_id].text,
            subquestion_id: props.subquestion_id.toString()
        }).then((response) => {
            console.log(response);
            question.subquestions[props.subquestion_id].audio_file_path = response.data.path;
            alert("Generated Audio");
            setQuestion({...question, subquestions: question.subquestions});
        });



    }

    return (
        <>
            <div className={"flex flex-col w-full items-center"}>
                <textarea value={question?.subquestions[props.subquestion_id].text} onChange={onTextChange} className={"w-2/3 border-primary_dark border-2"}/>
                <button onClick={onGenerateAudioPressed} className={"bg-primary_dark rounded-full m-3 text-white p-2 w-1/3"}>Generate Audio</button>
                <button onClick={() => props.delete(props.subquestion_id)} className={"bg-primary_dark rounded-full m-3 mt-0 text-white p-2 w-1/3"}>Delete</button>
            </div>

        </>
    );
}
