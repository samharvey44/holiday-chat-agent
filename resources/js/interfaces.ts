import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import { Theme } from '@mui/system/createTheme/createTheme';

import { ITemperature } from './atoms/temperatures/interfaces';
import { IContinent } from './atoms/continents/interfaces';
import { ICategory } from './atoms/categories/interfaces';
import { ILocation } from './atoms/locations/interfaces';
import { ICountry } from './atoms/countries/interfaces';
import { ICity } from './atoms/cities/interfaces';
import { ERoles } from './enums';

export interface IRole {
    id: number;
    name: ERoles;
}

export interface IStyles {
    [name: string]: SxProps<Theme>;
}
export interface IHoliday {
    id: number;
    createdAt: string;
    hotelName: string;
    pricePerNight: number;
    rating: number;
    temperature: ITemperature;
    continent: IContinent;
    location: ILocation;
    category: ICategory;
    country: ICountry;
    city?: ICity;
}

export interface IMeta {
    current_page: number;
    total: number;
    last_page: number;
}
