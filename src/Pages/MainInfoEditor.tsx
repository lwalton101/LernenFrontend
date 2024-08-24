import {useQuestion} from "../context/QuestionContext.tsx";
import {ChangeEvent, useState} from "react";
import axiosInstance from "../axiosInstance.ts";

interface MainInfoEditorProps {
    className: string
}

export function MainInfoEditor(props: MainInfoEditorProps) {
    const { question, setQuestion } = useQuestion();
    const [newTagName, setNewTagName] = useState("")

    function onTitleChange(e: ChangeEvent<HTMLInputElement>) {
        if(!question){
            return;
        }
        const updatedQuestion = { ...question, title: e.target.value };
        setQuestion(updatedQuestion);
    }

    function onAddTagPress() {
        if(!question){
            return;
        }
        const tags = question.tags;
        if(tags.includes(newTagName) || tags.length >= 5){
            return;
        }
        tags.push(newTagName)
        const updatedQuestion = { ...question, tags: tags };
        setQuestion(updatedQuestion);
        setNewTagName("");
    }

    function onNewTagNameChange(e: ChangeEvent<HTMLInputElement>) {
        setNewTagName(e.target.value);
    }

    function onPublishedChange(e: ChangeEvent<HTMLInputElement>) {
        if(!question){
            return;
        }
        const updatedQuestion = { ...question, published: e.target.checked };
        setQuestion(updatedQuestion);
    }

    async function onEditPress() {
        if(!question){
            return;
        }
        await axiosInstance.post(`/question/${question.question_id}/update`, question)
    }

    function deleteTag(tag: string) {
        if(!question){
            return;
        }
        const tagIndex = question.tags.indexOf(tag);
        question.tags.splice(tagIndex, 1);
        setQuestion({...question, tags: question.tags});
    }

    return (
        <>
            <div className={props.className}>
                <div className={"flex m-2"}>
                    <p className={"mr-1"}>Title:   </p>
                    <input placeholder={"Enter Title"} value={question?.title} onChange={(onTitleChange)}/>
                </div>
                <hr className="border-t-4 border-secondary w-11/12 my-2"/>
                <div className={"flex flex-col items-center"}>
                    <h1 className={"size-9"}>Tags</h1>

                    {question?.tags.map((tag) => (
                        <div key={tag} className={"flex gap-2 bg-gray-200 p-2 rounded mb-2"}>
                            <p>{tag}</p>
                            <button onClick={() => deleteTag(tag)}>X</button>
                        </div>
                    ))}
                    <input value={newTagName} onChange={onNewTagNameChange} placeholder={"New Tag"}/>
                    <button className={"bg-primary_dark rounded-full m-3 text-white p-2 w-5/6"} onClick={onAddTagPress}>Add Tag</button>
                </div>

                <hr className="border-t-4 border-secondary w-11/12 my-2"/>

                <div className={"flex gap-2"}>
                    <p>Published</p>
                    <input type={"checkbox"} onChange={onPublishedChange} checked={question?.published}/>
                </div>
                <hr className="border-t-4 border-secondary w-11/12 my-2"/>

                <button className={"bg-primary_dark rounded-full m-3 text-white p-2 w-5/6"} onClick={onEditPress}>Save</button>
            </div>
        </>
    );
}
