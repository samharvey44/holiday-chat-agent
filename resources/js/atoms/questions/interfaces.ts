export interface IQuestion {
    id: number;
    key: string;
    text: string;
    order: number;

    answers: IAnswer[];
}

export interface IAnswer {
    id: number;
    text: string;
}

export interface IQuestionWithAnswer {
    [key: string]: string;
}
