import { Coordinates } from "../Coordinates";
import { Weather } from "../Weather";

export interface City {
    id: number;
    name: string;
    country: string;
    coord: Coordinates;
    weather: Weather;
}