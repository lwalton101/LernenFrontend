import {Navbar} from "../../Navbar.tsx";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {QuestionProvider} from "../../context/QuestionContext.tsx";
import {ResultSection} from "./ResultSection.tsx";
import {RatingBox} from "../Rating/RatingBox.tsx";
import axiosInstance from "../../axiosInstance.ts";

export function ResultPage() {
    const [searchParams, _] = useSearchParams();
    const [id, setId] = useState("");
    const [difficulty, setDifficulty] = useState(0);
    const [readability, setReadability] = useState(0);
    const [resultStatus, setResultStatus] = useState("");
    useEffect(() => {
        const id = searchParams.get("id");
        if(!id){
            return;
        }
        setId(id);
    }, []);
    return (
        <div className={"h-screen flex flex-col"}>
            <Navbar></Navbar>
            <div className={"flex-1 flex justify-center"}>
                <QuestionProvider id={id}>
                    <div className={"flex w-3/6 justify-center"}>
                        <ResultSection className={"bg-primary_mid m-3 w-full rounded-xl flex flex-col items-center overflow-y-scroll"}></ResultSection>
                    </div>
                    <div className={"flex flex-col bg-primary_mid m-4 h-fit items-center rounded-xl"}>
                        <p>Rating</p>
                        <div className={"flex gap-2 m-2"}>
                            <p>Difficulty:</p>
                            <RatingBox onRatingSelect={(rating) => setDifficulty(rating)}></RatingBox>
                        </div>

                        <div className={"flex gap-2 m-2"}>
                            <p>Readability:</p>
                            <RatingBox onRatingSelect={(rating) => setReadability(rating)}></RatingBox>
                        </div>

                        <button className={"bg-primary_dark rounded-full m-1 text-white p-2 mb-3 w-5/6 "} onClick={async () => {
                            const response = await axiosInstance.post("/rating/", {
                                question_id: id,
                                readability: readability,
                                difficulty: difficulty
                            });

                            setResultStatus(response.data.message)
                        }}>Submit Rating</button>

                        {resultStatus ? (<p className={"mb-2"}>{resultStatus}</p>) : (<></>)}
                    </div>
                </QuestionProvider>
            </div>
        </div>
    );
}
