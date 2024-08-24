import {Subquestion} from "./Subquestion.ts";

export interface Question {
    question_id: string
    title: string;
    user_id: number;
    created_at: string;
    published: boolean;
    tags: string[],
    subquestions: Subquestion[]
}
export function getDate(createdAt: string){
    return new Date(createdAt).toLocaleDateString("en-GB");
}