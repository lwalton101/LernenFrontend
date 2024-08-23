import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import axiosInstance from '../axiosInstance.ts';
import { Question } from '../Model/Question.ts';

// Define the context type to include both the question and setQuestion function
interface QuestionContextType {
    question: Question | null;
    setQuestion: (question: Question | null) => void;
}

// Create context with an empty object as the default value
const QuestionContext = createContext<QuestionContextType | undefined>(undefined);

export function QuestionProvider({ children, id }: { children: ReactNode, id: string }) {
    const [question, setQuestion] = useState<Question | null>(null);

    useEffect(() => {
        // Fetch the question data
        if(!id){
            return;
        }
        axiosInstance.get(`/question/${id}`).then((r) => setQuestion(r.data)).catch(err => console.error(err));
    }, [id]);

    return (
        <QuestionContext.Provider value={{ question, setQuestion }}>
            {children}
        </QuestionContext.Provider>
    );
}

// Create a custom hook for easy access to the QuestionContext
export function useQuestion(): QuestionContextType {
    const context = useContext(QuestionContext);
    if (context === undefined) {
        throw new Error('useQuestion must be used within a QuestionProvider');
    }
    return context;
}