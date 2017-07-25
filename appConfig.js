import { RNConfig } from 'NativeModules';
import EnvConfig from './envConfig.json';

const environment = RNConfig.buildEnvironment;

const getApiEndpointURL = () => {
    return EnvConfig[environment].apiEndpointURL;
}

const getApiKey = () => {
    return EnvConfig[environment].apiKey;
}

export default {
    apiEndpointURL: getApiEndpointURL(),
    apiKey: getApiKey() 
}