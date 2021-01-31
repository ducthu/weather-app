import React, { SelectHTMLAttributes, OptionHTMLAttributes } from 'react';
import { Unit } from '../../../types/Unit';


interface OptionsProps {
    value: string;
    text: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    options: Array<OptionsProps>;
    onSelection: (e: string) => void;
    selection: string;
}

const Select: React.FC<SelectProps> = ({ options, name, onSelection, selection }) => {
    return (
        <select name={name} onChange={(e) => onSelection(e.currentTarget.value)}>
            {options.map((option, index) => (
                <option key={index} value={option.value} selected={selection === option.value}>{option.text}</option>
            ))}
        </select>
    );
}

export default Select;