import React from 'react';
import { Clouds } from '../../../types/Clouds';
import { Summary } from '../../../types/Summary';
import { Container } from './styles';

interface CloudWidgetProps {
    clouds: Clouds;
    summary: Summary;
}

const CloudWidget: React.FC<CloudWidgetProps> = ({ clouds, summary }) => {
    return (
        <Container>
            <h2 className="text-lg font-bold text-center">Clouds</h2>
            <h3>humidity: {clouds.humidity}%</h3>
            <h3>Visibility: {clouds.visibility}</h3>
        </Container>
    );
}

export { CloudWidget };