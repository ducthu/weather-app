import React from 'react';
import { Heading } from './styles';

interface CityHeadingProps {
    name: string;
}

const CityHeading: React.FC<CityHeadingProps> = ({ name }) => {
    return (
        <Heading>{name}</Heading>
    );
};

export { CityHeading };