import { useEffect, useState } from "react";


const WeatherInfo = ({ country }) => {
	const [weatherData, setWeatherData] = useState(null);



	useEffect(() => {
		const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${API_KEY}`)
			.then(response => response.json())
			.then(data => {
				setWeatherData(data);
			})
	}, [])

	if (weatherData) {
		return (
			<div>
				<h2>Weather in {country.capital}</h2>
				<p><strong>Temperature:</strong> {(weatherData.main.temp - 273.5).toFixed(2)} Celsius</p>
				<img alt="weather icon" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} />
				<p><strong>Wind:</strong> {weatherData.wind.speed} m/s</p>
			</div>
		)
	} else {
		return <p>Loading weather data...</p>
	}


}

export default WeatherInfo