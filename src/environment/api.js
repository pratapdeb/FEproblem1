const BASE_URL_CONFIG = {
    dev: {
        VEHICLES_URL: 'https://findfalcone.herokuapp.com/vehicles',
        PLANETS_URL: 'https://findfalcone.herokuapp.com/planets'
    },
    qa: {
        VEHICLES_URL: 'https://findfalcone.herokuapp.com/vehicles',
        PLANETS_URL: 'https://findfalcone.herokuapp.com/planets'
    },
    demo: {
        VEHICLES_URL: 'https://findfalcone.herokuapp.com/vehicles',
        PLANETS_URL: 'https://findfalcone.herokuapp.com/planets'
    },
    prod: {
        VEHICLES_URL: 'https://findfalcone.herokuapp.com/vehicles',
        PLANETS_URL: 'https://findfalcone.herokuapp.com/planets'
    }
}

// helps IDE to auto populate

type BaseUrlsType = {
    VEHICLES_URL: string,
    PLANETS_URL: string
}

export const envConfigByLocation = ({origin, host}) => {
    let envConfig
    switch (host) {
        case 'website.com':
            break;
        default:
            envConfig = {baseUrls : BASE_URL_CONFIG.dev, env: 'dev'}
            break;
    }
    return envConfig
}

const selectedBaseUrls =  envConfigByLocation(window.location).baseUrls

export const BASE_URLS: BaseUrlsType = {
    ...selectedBaseUrls
}