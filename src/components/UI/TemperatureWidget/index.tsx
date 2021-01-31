import React from 'react';
import { Temperature } from '../../../types/Temperature';
import { Unit } from '../../../types/Unit';
import { getTemperatureSymbolFromUnit } from '../../../utils/unit';
import { Container } from './styles';

interface TemperatureWidgetProps {
    temperature: Temperature
    unit: Unit
}

const TemperatureWidget: React.FC<TemperatureWidgetProps> = ({ temperature, unit }) => {
    return (
        <Container>
            <h2 className="text-lg font-bold text-center">Temperature:</h2>
            <h3>Actual: {temperature.actual} {getTemperatureSymbolFromUnit(unit)}</h3>
            <h3>Feels Like: {temperature.feelsLike} {getTemperatureSymbolFromUnit(unit)}</h3>
            <h3>Maximum: {temperature.max} {getTemperatureSymbolFromUnit(unit)}</h3>
            <h3>Mininum: {temperature.min} {getTemperatureSymbolFromUnit(unit)}</h3>
        </Container>
    );
}

export default TemperatureWidget;