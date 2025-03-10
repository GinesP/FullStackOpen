

const Search = ({ countries, search }) => {

	const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))


	return (
		<>
			Search results: {filteredCountries.length > 10 ? 'Too many matches, specify another filter' : filteredCountries.length === 1 ? filteredCountries.map(country =>
				<div key={country.cca3}>
					<h1>{country.name.common}</h1>
					<p>capital {country.capital}</p>
					<p>population {country.population}</p>
					<h2>languages</h2>
					<ul>{Object.values(country.languages).map(language => <li key={language}>{language}</li>)}</ul>
					<img src={country.flags.png} alt={country.name.common} width="100" />
				</div>) : filteredCountries.map(country => <div key={country.cca3}>{country.name.common}</div>)}
		</>
	)
}

export default Search