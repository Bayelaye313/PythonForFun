
//Question Model
export interface Question {
    questionId: number;
    question: string;
    options: Option[];
}

//response option
interface Option {
    answer: string;
    isCorrect: boolean;
    isDisabled: boolean;
}
