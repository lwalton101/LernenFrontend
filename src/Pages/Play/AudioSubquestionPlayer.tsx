import H5AudioPlayer from "react-h5-audio-player";
import 'react-h5-audio-player/lib/styles.css';
interface AudioSubquestionPlayerProps {
    subquestion_id: number;
}

export function AudioSubquestionPlayer(props: AudioSubquestionPlayerProps) {
    return (
        <div className={"flex justify-center"}>
            <H5AudioPlayer src={"https://lernendata.s3.eu-west-1.amazonaws.com/take+me+to+snurch+(snail+church)+%5BRrDt9a0q3P0%5D.m4a"} className={"bg-primary_mid border-none shadow-none"}>

            </H5AudioPlayer>
        </div>
    );
}
