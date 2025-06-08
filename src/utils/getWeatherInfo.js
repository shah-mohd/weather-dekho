
const getWeatherInfo = async (cityName) => {

    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = import.meta.env.VITE_API_URL;

    console.log(API_KEY);
    console.log(API_URL);


    const response = await fetch(`${API_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
    const jsonResponse = await response.json();

    const weatherInfo = {
        name: jsonResponse.name,
        temp: jsonResponse.main.temp,
        max_temp: jsonResponse.main.temp_max,  
        min_temp: jsonResponse.main.temp_min,
        feels_like: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity, 
        }

        console.log(weatherInfo);


    return weatherInfo;
}

export default getWeatherInfo;