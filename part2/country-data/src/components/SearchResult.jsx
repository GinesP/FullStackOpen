import { useState } from "react"
import CountryInfo from "./CountryInfo"



const SearchResult = ({ country }) => {
	const [showInfo, setShowInfo] = useState(false)
	const apiUrl = import.meta.env.VITE_OPENWEATHER_KEY;

	console.log(apiUrl)

	const handleClick = () => {
		setShowInfo(!showInfo)
	}

	return (
		<div>
			{showInfo ? <CountryInfo key={country.cca3} country={country} /> : <div key={country.cca3}>{country.name.common} <button onClick={handleClick}>show</button></div>}
		</div>

	)
}

export default SearchResult