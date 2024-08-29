import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance.ts';
import { Question } from '../Model/Question.ts';
import {Result} from "../Model/Result.ts";

interface ResultContextType {
    results: Result[] | null;
    setResults: (result: Result[] | null) => void;
}

// Create context with an empty object as the default value
const ResultContext = createContext<ResultContextType | undefined>(undefined);

export function ResultProvider({ children, id }: { children: ReactNode, id: string }) {
    const [results, setResults] = useState<Result[] | null>(null);

    useEffect(() => {
        // Fetch the question data
        if(!id){
            return;
        }
        axiosInstance.get(`/question/${id}`).then((r) => {
            const q: Question = r.data;
            const results: Result[] = q.subquestions.map((q2) => {
                return {
                    subquestionID: (q2.subquestion_id as number).toString(),
                    answer1: false,
                    answer2: false,
                    answer3: false,
                    answer4: false
                }
            });
            setResults(results)
        })
    }, [id]);

    return (
        <ResultContext.Provider value={{ results, setResults }}>
            {children}
        </ResultContext.Provider>
    );
}

// Create a custom hook for easy access to the ResultContext
export function useResult(): ResultContextType {
    const context = useContext(ResultContext);
    if (context === undefined) {
        throw new Error('useResult must be used within a ResultProvider');
    }
    return context;
}