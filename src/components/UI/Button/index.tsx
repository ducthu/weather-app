import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type, disabled, ...rest }) => {
    return (
        <Container type={type} onClick={onClick} disabled={disabled} {...rest}>{label}</Container>
    )
};

export { Button };