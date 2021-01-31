import { Unit } from '../Unit';

export const SET_CONFIG = 'SET_CONFIG';

export interface ConfigInput {
    units: Unit;
}

export interface ConfigState {
    units: Unit;
}

export interface setConfigAction {
    type: typeof SET_CONFIG;
    payload: string;
}

export type ConfigAction = setConfigAction;