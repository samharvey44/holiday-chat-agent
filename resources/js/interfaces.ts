import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import { Theme } from '@mui/system/createTheme/createTheme';

export interface IRole {
    id: number;
    name: string;
}

export interface IStyles {
    [name: string]: SxProps<Theme>;
}

export interface ITemperature {
    id: number;
    name: string;
}

export interface IContinent {
    id: number;
    name: string;
}

export interface ILocation {
    id: number;
    name: string;
}

export interface ICategory {
    id: number;
    name: string;
}

export interface ICountry {
    id: number;
    name: string;
}

export interface ICity {
    id: number;
    name: string;
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
