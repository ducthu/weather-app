import React, { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const Input: React.FC<InputProps> = ({ type = 'text', placeholder, value, name, onChange, label }) => {
    return (
        <div>
            <label className="font-semibold" htmlFor={name}>{label}</label>
            <input
                className="w-full border-2 rounded mb-2 p-2"
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                id={name}
                onChange={onChange}
                required
                autoComplete="off"
            />
        </div>
    );
}

export default Input;