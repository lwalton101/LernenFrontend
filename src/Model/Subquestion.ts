export interface Subquestion {
    subquestion_id?: number;
    question_id?: number;
    type: number;
    question_num: number;
    text?: string;
    audio_file_path?: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    answer1: boolean;
    answer2: boolean;
    answer3: boolean;
    answer4: boolean;
}