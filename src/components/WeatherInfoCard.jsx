const WeatherInfoCard = ({info}) => {

    const {name, temp, max_temp, min_temp, feels_like, humidity} = info;

    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    // const display =  name ? "flex" : "hidden"
    // console.log(display);

    if(name == ''){
        return(
            <div className="text-center text-xl font-semibold animate-pulse">
                <h1>Enter city name to know weather!</h1>
            </div>
        )
    }
    

    return(
        <div className="flex flex-col items-center my-10">
            {/* <div className="w-2/4 md:w-sm">

                <img
                src={humidity > 80 ? RAIN_URL : temp > 15 ? HOT_URL : COLD_URL}
                />

            </div> */}
            

            <div className=" w-3/4 place-items-center space-y-2">
            <h1 className="text-2xl font-semibold font-mono">City Name {name}</h1>
            <h3 className="text-lg font-semibold font-mono">Temperature {temp}&deg;C</h3>
            <h3 className="text-lg font-semibold font-mono">Humidity {humidity}</h3>
            <h3 className="text-lg font-semibold font-mono">Min Temp {min_temp}&deg;C</h3>
            <h3 className="text-lg font-semibold font-mono">Max Temp {max_temp}&deg;C</h3>
            <p className="text-lg font-semibold font-mono">The weather feel like {feels_like}&deg;C</p>
            </div>

        </div>
    )
}

export default WeatherInfoCard;