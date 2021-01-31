import { City } from "../City";
import { ConfigInput } from "../ConfigInput";

export interface getCityByNamePayload {
    getCityByName: City;
};

export interface getCityByIdPayload {
    getCityById: [City];
}