import { useState } from "react";
import Search from "./Search";
import WeatherInfoCard from "./WeatherInfoCard";

const WeatherBody = () => {

    const [info, setInfo] = useState({
        name: "",
        temp: null,
        max_temp: null,  
        min_temp: null,
        feels_like: null,
        humidity: null, 
    });

    const updateInfo = (newInfo) => {
        setInfo(newInfo);
    }

    return(
        <div className="h-[85vh]">
            <Search updateInfo={updateInfo}/>
            <WeatherInfoCard info={info} />
        </div>
    )
}

export default WeatherBody;