import gql from 'graphql-tag';
import { COORDINATES_FRAGMENT, WEATHER_FRAGMENT } from '../Fragments';

export const GET_CITY_BY_NAME = gql`
    query getCityByName($name: String!, $country: String, $config: ConfigInput) {
        getCityByName(name: $name, country: $country, config: $config){
            id, 
            name,
            country,
            coord ${COORDINATES_FRAGMENT},
            weather ${WEATHER_FRAGMENT}
        }
    }
`;

export const GET_CITY_BY_ID = gql`
    query getCityById($id: [String!], $config: ConfigInput) {
        getCityById(id: $id, config: $config){
            id, 
            name,
            country,
            coord ${COORDINATES_FRAGMENT},
            weather ${WEATHER_FRAGMENT}
        }
    }
`;

export const GET_CITY_ID_BY_NAME = gql`
    query getCityByName($name: String!) {
        getCityByName(name: $name){
            id
        }
    }
`;