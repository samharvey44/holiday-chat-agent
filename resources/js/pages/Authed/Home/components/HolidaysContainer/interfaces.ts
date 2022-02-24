import { IHoliday, IMeta } from 'app/interfaces';
import { TStateAction } from 'app/types';

export interface IProps {
    holidaysIn: boolean;
    setAgentIn: TStateAction<boolean>;
    holidays: IHoliday[];
    resetAgent: () => void;
    holidaysMeta: IMeta;
    holidaysPage: number;
    setHolidaysPage: TStateAction<number>;
}
