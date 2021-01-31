import React from 'react';
import { DashboardLayout } from '../../Layouts/DashboardLayout';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Unit } from '../../../types/Unit';
import { GET_CITY_BY_NAME } from '../../../graphql/Queries/City';
import { getCityByNamePayload } from '../../../types/Mutations';
import { CityHeading } from '../../UI/CityHeading';
import { Image } from '../../UI/OpenWeatherImage';
import { CloudWidget } from '../../UI/CloudWidget';
import TemperatureWidget from '../../UI/TemperatureWidget';
import FullPageLoading from '../../UI/FullPageLoading';
import WindWidget from '../../UI/WindWidget';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

interface CityPageProps {

}

const City: React.FC = () => {
    const { units } = useSelector((state: RootState) => state.config);
    const { name } = useParams<{ name: string }>();
    const { data, loading } = useQuery<getCityByNamePayload>(GET_CITY_BY_NAME, {
        variables: { name: name, config: { units } },
        fetchPolicy: "no-cache"
    });

    if (loading) {
        return (
            <FullPageLoading />
        );
    }

    return (
        <DashboardLayout>
            <div className="w-full">
                <Link className="hover:underline" to="/">Back to search</Link>
                {data?.getCityByName && (
                    <>
                        <div className="flex">
                            <div className="mx-auto">
                                <Image
                                    icon={data.getCityByName.weather.summary.icon}
                                />
                            </div>
                        </div>
                        <h2 className="text-lg font-bold text-center mb-4">{data.getCityByName.weather.summary.description}</h2>
                        <CityHeading name={`${data?.getCityByName.name}, ${data?.getCityByName.country}`} />
                        <div className="grid grid-cols-3">
                            <CloudWidget
                                clouds={data.getCityByName.weather.clouds}
                                summary={data.getCityByName.weather.summary}
                            />
                            <TemperatureWidget temperature={data.getCityByName.weather.temperature} unit={units} />
                            <WindWidget wind={data.getCityByName.weather.wind} unit={units} />
                        </div>
                    </>
                )}
            </div>
        </DashboardLayout>
    );
}

export default City;