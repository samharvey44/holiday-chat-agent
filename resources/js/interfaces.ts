import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import { Theme } from '@mui/system/createTheme/createTheme';

export interface IRole {
    id: number;
    name: string;
}

export interface IStyles {
    [name: string]: SxProps<Theme>;
}
