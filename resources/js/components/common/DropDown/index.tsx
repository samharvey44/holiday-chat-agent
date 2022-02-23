import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';

import { getDeterminerForNoun } from 'app/helpers';
import { IProps } from './interfaces';

const DropDown: React.FC<IProps> = ({
    inputLabel,
    value,
    onChange,
    required,
    error,
    defaultOption,
    items,
    helperText,
}) => (
    <FormControl variant="filled" fullWidth required={required}>
        <InputLabel id={`${inputLabel}label`}>
            Select {getDeterminerForNoun(inputLabel)}...
        </InputLabel>

        <Select
            labelId={`${inputLabel}label`}
            label={inputLabel.charAt(0).toUpperCase() + inputLabel.slice(1)}
            name={inputLabel.toLowerCase()}
            value={value}
            onChange={onChange}
            error={error}
        >
            {defaultOption && <MenuItem value="">{defaultOption}</MenuItem>}

            {items.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                    {item.label}
                </MenuItem>
            ))}
        </Select>

        {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
);

export default DropDown;
