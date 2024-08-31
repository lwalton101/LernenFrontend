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
    answer1: number;
    answer2: number;
    answer3: number;
    answer4: number;
}