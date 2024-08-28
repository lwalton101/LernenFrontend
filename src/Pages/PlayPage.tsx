import {QuestionProvider} from "../context/QuestionContext.tsx";
import {Navbar} from "../Navbar.tsx";
import {MainInfoEditor} from "./MainInfoEditor.tsx";
import {SubquestionEditor} from "./SubquestionEditor.tsx";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

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
                    {id}
                </div>
            </QuestionProvider>

        </>
    );
}
