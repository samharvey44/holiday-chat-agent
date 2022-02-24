import { IQuestionWithAnswer } from 'app/atoms/questions/interfaces';
import { TStateAction } from 'app/types';

export interface IProps {
    agentIn: boolean;
    setHolidaysIn: TStateAction<boolean>;
    handleGetHolidays: (page: number) => void;
    selectedAnswers: IQuestionWithAnswer;
    setSelectedAnswers: TStateAction<IQuestionWithAnswer>;
    currentQuestion: number;
    setCurrentQuestion: TStateAction<number>;
}
