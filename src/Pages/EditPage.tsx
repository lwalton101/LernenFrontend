import {Navbar} from "../Navbar.tsx";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {QuestionProvider} from "../context/QuestionContext.tsx";
import {MainInfoEditor} from "./MainInfoEditor.tsx";
import {SubquestionEditor} from "./SubquestionEditor.tsx";

export function EditPage() {
    const [searchParams, _] = useSearchParams();
    const [id, setId] = useState("");
    useEffect(() => {
        setId(searchParams.get("id"));
    }, []);
    return (
        <>
            <QuestionProvider id={id}>
                <div className={"h-screen flex flex-col"}>
                    <Navbar></Navbar>
                    <div className={"flex-1 flex"}>
                        <MainInfoEditor className={"bg-primary_mid flex flex-col items-center"}></MainInfoEditor>
                        <SubquestionEditor className={"bg-gray-200 flex-1 flex flex-col items-center overflow-y-scroll"}></SubquestionEditor>
                    </div>

                </div>
            </QuestionProvider>

        </>
    );
}
