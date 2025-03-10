import { useEffect, useState } from "react"
import Search from "./components/Search"

const App = () => {

  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))

  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <form>
        find countries <input onChange={handleSearch} value={search} />
      </form>
      <Search countries={countries} search={search} />
    </div>
  )
}


export default App