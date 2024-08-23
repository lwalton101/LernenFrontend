import {Navbar} from "../Navbar.tsx";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {QuestionProvider} from "../context/QuestionContext.tsx";
import {MainInfoEditor} from "./MainInfoEditor.tsx";

export function EditPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [id, setId] = useState("");
    useEffect(() => {
        setId(searchParams.get("id"));
    }, []);
    return (
        <>
            <QuestionProvider id={id}>
                <div className={"h-screen"}>
                    <Navbar></Navbar>
                    <div className={"h-full flex"}>
                        <MainInfoEditor></MainInfoEditor>
                    </div>

                </div>
            </QuestionProvider>

        </>
    );
}
