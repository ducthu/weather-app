import React from 'react';
import { useQuery } from '@apollo/client';
import { getCityByIdPayload } from '../../../types/Mutations';
import { GET_CITY_BY_ID } from '../../../graphql/Queries/City';
import { CityWidget } from '../CityWidget';
import { Container } from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

interface CityContainerWidgetsProps {
}

const defaultCities = ["2988507", "5368361", "5128581", "1850144"]

const CityContainerWidgets: React.FC<CityContainerWidgetsProps> = () => {
    const { units } = useSelector((state: RootState) => state.config);
    const { data, loading } = useQuery<getCityByIdPayload>(GET_CITY_BY_ID, {
        variables: { id: defaultCities, config: { units } },
        fetchPolicy: "no-cache"
    });

    if (loading) {
        return (
            <div>Loading ...</div>
        );
    }
    return (
        <Container>
            {data?.getCityById ? (
                data.getCityById.map((c, key) => <CityWidget key={key} city={c} unit={units} />)
            ) : 'Aucune ville trouvée'}
        </Container>
    );
};

export { CityContainerWidgets };
