import {useQuestion} from "../context/QuestionContext.tsx";
import React, {ChangeEvent, useState} from "react";
import axiosInstance from "../axiosInstance.ts";

export function MainInfoEditor() {
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
        tags.push(newTagName)
        const updatedQuestion = { ...question, tags: tags };
        setQuestion(updatedQuestion);
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

    return (
        <>
            <div className={"bg-primary_mid"}>
                <h1>Question Editor</h1>
                <input value={question?.title} onChange={(onTitleChange)}/>
                <div>
                    <h1>Tags</h1>
                    {question?.tags.map((tag) => (
                        <div key={tag}>
                            {tag}
                        </div>
                    ))}
                    <input value={newTagName} onChange={onNewTagNameChange} placeholder={"New Tag"}/>
                    <button onClick={onAddTagPress}>Add Tag</button>
                </div>
                <p>Published</p>
                <input type={"checkbox"} onChange={onPublishedChange} checked={question?.published}/>
                <button onClick={onEditPress}>Edit</button>
            </div>
        </>
    );
}
