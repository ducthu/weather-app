import { Unit } from "../types/Unit";

export const getTemperatureSymbolFromUnit = (unit: Unit) => {
    switch (unit) {
        case Unit.IMPERIAL:
            return '°F';
        case Unit.KELVIN:
            return 'K';
        case Unit.METRIC:
            return '°C';
        default:
            return 'undefined';
    }
}

export const getSpeedFromUnit = (unit: Unit) => {
    switch (unit) {
        case Unit.IMPERIAL:
            return 'mph';
        case Unit.KELVIN:
            return 'm/s';
        case Unit.METRIC:
            return 'm/s';
        default:
            return 'undefined';
    }
}