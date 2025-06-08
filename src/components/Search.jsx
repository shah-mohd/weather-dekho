import { useState } from "react";
import getWeatherInfo from "../utils/getWeatherInfo";

const Search = ({updateInfo}) => {

    const [searchCity, setSearchCity] = useState('');
    const [error, setError] = useState(false);

    const handleClick = async () => {
        try{
            if(searchCity == "") return;

            // console.log(searchCity); 
            const info = await getWeatherInfo(searchCity);
            // console.log(info);
            updateInfo(info);
            setSearchCity("");
            setError(false);
        } catch(err){
            console.log(err);
            setError(true);
        }
    }


    
    return(
        <div className="flex justify-center items-center my-10">
            <div className="">
            <input
            type="text"
            placeholder="Search City"
            className="border-2 border-gray-300 px-2 py-1 rounded-sm"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
            />
            <button 
            className="border-2 border-gray-300 mx-4 px-4 rounded-sm bg-gray-100 hover:bg-gray-200 cursor-pointer"
            onClick={handleClick}
            >Search</button>
            {error && <p className="text-red-500">No such place exits!</p>}
            </div>

        </div>
    )
}

export default Search;