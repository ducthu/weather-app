import React from 'react';
import { Unit } from '../../../types/Unit';
import { Wind } from '../../../types/Wind';
import { getSpeedFromUnit } from '../../../utils/unit';
import { Container } from './styles';

interface WindWidgetProps {
    wind: Wind;
    unit: Unit;
}

const WindWidget: React.FC<WindWidgetProps> = ({ wind, unit }) => {
    return (
        <Container>
            <h2 className="text-lg font-bold text-center">Wind:</h2>
            <h3>Direction: {wind.deg}</h3>
            <h3>Speed: {wind.speed} {getSpeedFromUnit(unit)}</h3>
        </Container>
    );
}

export default WindWidget;