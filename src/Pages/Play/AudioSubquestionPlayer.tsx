import H5AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
import {useQuestion} from "../../context/QuestionContext.tsx";
import {useEffect, useState} from "react";

interface AudioSubquestionPlayerProps {
    subquestion_id: number;
}

export function AudioSubquestionPlayer(props: AudioSubquestionPlayerProps) {
    const { question } = useQuestion();
    const [audioPath, setAudioPath] = useState("take+me+to+snurch+(snail+church)+%5BRrDt9a0q3P0%5D.m4a");

    useEffect(() => {
        if(!question){
            return;
        }

        if(!question.subquestions[props.subquestion_id].audio_file_path){
            return;
        }

        setAudioPath(question.subquestions[props.subquestion_id].audio_file_path as string)
    }, [question]);
    return (
        <div className={"flex justify-center"}>
            <H5AudioPlayer src={"https://lernendata.s3.eu-west-1.amazonaws.com/" + audioPath} className={"bg-primary_mid border-none shadow-none"}>

            </H5AudioPlayer>
        </div>
    );
}
