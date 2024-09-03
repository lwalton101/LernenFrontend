import {Question} from "./Question.ts";
import {User} from "./User.ts";

export interface SearchResult{
    message: string,
    results: {questions: Question[], users: User[]}

}