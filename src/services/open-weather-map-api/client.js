import axios from 'axios';

const hourlyForecast = async (apiKey) => {
    await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=doncaster,uk&appid=c9782663856eb004eefa0b9b309c8144')
};