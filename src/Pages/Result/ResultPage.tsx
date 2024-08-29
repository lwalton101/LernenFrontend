import {Navbar} from "../../Navbar.tsx";
import {PlaySection} from "../PlaySection.tsx";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {QuestionProvider} from "../../context/QuestionContext.tsx";
import {ResultSection} from "./ResultSection.tsx";

interface ResultPageProps {
    className: string
}

export function ResultPage(props: ResultPageProps) {
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
        <div className={"h-screen flex flex-col"}>
            <Navbar></Navbar>
            <div className={"flex-1 flex justify-center"}>
                <QuestionProvider id={id}>
                    <ResultSection className={"bg-primary_mid m-3 w-1/2 rounded-xl flex flex-col items-center overflow-y-scroll"}></ResultSection>
                </QuestionProvider>
            </div>
        </div>
    );
}
