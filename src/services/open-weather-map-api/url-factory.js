const baseUrl = 'https://api.openweathermap.org/data/2.5/';

const forecastType = Object.freeze({
    CURRENT: 'data',
    FIVE_DAY_THREE_HOUR: 'forecastt'
});

const urlFactory = (apiKey, weatherType, location) => {

};

export {
    forecastType,
    urlFactory
};