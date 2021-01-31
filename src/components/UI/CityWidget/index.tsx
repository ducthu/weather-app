import React from 'react';
import { City } from '../../../types/City';
import { Container, Img } from './styles';
import { Link } from 'react-router-dom';
import { Unit } from '../../../types/Unit';
import { getTemperatureSymbolFromUnit } from '../../../utils/unit';

interface CityWidgetProps {
    city: City
    unit: Unit
}

const CityWidget: React.FC<CityWidgetProps> = ({ city, unit }) => {
    return (
        <Link to={`/city/${city.name.toLowerCase()}`}>
            <Container>
                <Img src={`http://openweathermap.org/img/wn/${city.weather.summary.icon}@2x.png`} />
                <h2>{city.name}, {city.country}</h2>
                <h3>{city.weather.temperature.actual} {getTemperatureSymbolFromUnit(unit)}</h3>
            </Container>
        </Link>
    );
}

export { CityWidget };