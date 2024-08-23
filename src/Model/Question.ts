import {Subquestion} from "./Subquestion.ts";

export interface Question {
    question_id: string
    title: string;
    user_id: number;
    created_at: Date;
    published: boolean;
    tags: string[],
    subquestions: Subquestion[]
}