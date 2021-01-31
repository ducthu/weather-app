
export const SUMMARY_FRAGMENT = `
    {
        title,
        description,
        icon
    }
`;

export const TEMPERATURE_FRAGMENT = `
    {
        actual, 
        feelsLike,
        min,
        max
    }
`;

export const WIND_FRAGMENT = `
    {
        speed,
        deg
    }
`;

export const CLOUD_FRAGMENT = `
    {
        all,
        visibility, 
        humidity
    }
`;

export const COORDINATES_FRAGMENT = `
    {
        lon, 
        lat
    }
`;

export const WEATHER_FRAGMENT = `
    {
        summary ${SUMMARY_FRAGMENT},
        temperature ${TEMPERATURE_FRAGMENT},
        wind ${WIND_FRAGMENT},
        clouds ${CLOUD_FRAGMENT},
        timestamp
    }
`;