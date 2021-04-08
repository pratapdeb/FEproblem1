// based on the Environment URl can be swithed
const BASE_URL_CONFIG = {
  dev: {
    VEHICLES_URL: 'https://findfalcone.herokuapp.com/vehicles',
    PLANETS_URL: 'https://findfalcone.herokuapp.com/planets',
    GET_TOKEN_URL: 'https://findfalcone.herokuapp.com/token',
    FIND_FALCON_URL: 'https://findfalcone.herokuapp.com/find'
  },
  qa: {
    VEHICLES_URL: 'https://findfalcone.herokuapp.com/vehicles',
    PLANETS_URL: 'https://findfalcone.herokuapp.com/planets',
    GET_TOKEN_URL: 'https://findfalcone.herokuapp.com/token',
    FIND_FALCON_URL: 'https://findfalcone.herokuapp.com/find'
  },
  demo: {
    VEHICLES_URL: 'https://findfalcone.herokuapp.com/vehicles',
    PLANETS_URL: 'https://findfalcone.herokuapp.com/planets',
    GET_TOKEN_URL: 'https://findfalcone.herokuapp.com/token',
    FIND_FALCON_URL: 'https://findfalcone.herokuapp.com/find'
  },
  prod: {
    VEHICLES_URL: 'https://findfalcone.herokuapp.com/vehicles',
    PLANETS_URL: 'https://findfalcone.herokuapp.com/planets',
    GET_TOKEN_URL: 'https://findfalcone.herokuapp.com/token',
    FIND_FALCON_URL: 'https://findfalcone.herokuapp.com/find'
  }
}

// helps IDE to auto populate URLS

type BaseUrlsType = {
    VEHICLES_URL: string,
    PLANETS_URL: string,
    GET_TOKEN_URL: string,
    FIND_FALCON_URL: string,
}
// swith enviromnet based on the URl 
export const envConfigByLocation = ({ origin, host }) => {
  let envConfig
  switch (host) {
    case 'website.qa.com':
      envConfig = { baseUrls: BASE_URL_CONFIG.qa, env: 'qa' }
    break
    case 'website.demo.com':
      envConfig = { baseUrls: BASE_URL_CONFIG.demo, env: 'demo' }
    break
    case 'website.com':
      envConfig = { baseUrls: BASE_URL_CONFIG.prod, env: 'prod' }
    break
    default:
      envConfig = { baseUrls: BASE_URL_CONFIG.dev, env: 'dev' }
      break
  }
  return envConfig
}

const selectedBaseUrls = envConfigByLocation(window.location).baseUrls

export const BASE_URLS: BaseUrlsType = {
  ...selectedBaseUrls
}
