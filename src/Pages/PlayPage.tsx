import {QuestionProvider} from "../context/QuestionContext.tsx";
import {Navbar} from "../Navbar.tsx";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {PlaySection} from "./PlaySection.tsx";

export function PlayPage() {
    const [searchParams, _] = useSearchParams();
    const [id, setId] = useState("");
    useEffect(() => {
        const id = searchParams.get("id");
        if(!id){
            return;
        }
        setId(id);
    }, []);
    return (
        <>
            <QuestionProvider id={id}>
                <div className={"h-screen flex flex-col"}>
                    <Navbar></Navbar>
                    <div className={"flex-1 flex justify-center"}>
                        <PlaySection className={"bg-primary_mid m-3 w-1/2 rounded-xl flex flex-col items-center overflow-y-scroll"}></PlaySection>
                    </div>

                </div>
            </QuestionProvider>

        </>
    );
}
