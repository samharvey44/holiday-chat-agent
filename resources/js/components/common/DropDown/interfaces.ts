export interface IProps {
    inputLabel: string;
    value: any;
    onChange: (value: any) => void;
    required: boolean;
    defaultOption?: string;
    items: IMenuItem[];
    error?: boolean;
    helperText?: string;
}

export interface IMenuItem {
    label: string;
    value: any;
}
