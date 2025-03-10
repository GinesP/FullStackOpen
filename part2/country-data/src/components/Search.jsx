import CountryInfo from "./CountryInfo"
import SearchResult from "./SearchResult"


const Search = ({ countries, search }) => {

	const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))


	return (
		<>
			Search results: {filteredCountries.length > 10 ? 'Too many matches, specify another filter' : filteredCountries.length === 1 ? filteredCountries.map(country =>
				<CountryInfo key={country.cca3} country={country} />
			) : filteredCountries.map(country => <SearchResult key={country.cca3} country={country} />)}
		</>
	)
}

export default Search