import WeatherInfo from "./WeatherInfo"


const CountryInfo = ({ country }) => {
	return (
		<>
			<h1>{country.name.common}</h1>
			<p>Capital {country.capital}</p>
			<p>Population {country.population}</p>
			<p>Area {country.area} km<sup>2</sup></p>
			<h2>Languages</h2>
			<ul>{Object.values(country.languages).map(language => <li key={language}>{language}</li>)}</ul>
			<img src={country.flags.png} alt={country.name.common} width="200" />
			<WeatherInfo country={country} />
		</>
	)
}

export default CountryInfo