import { useState, useEffect } from "react"
import CountryCard from "./components/CountryCard"
import CountryList from "./components/CountryList"
import countriesService from './services/countries'

function App() {

  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  const filteredCountries = countries.filter(c => c.name.common.toLowerCase().includes(filterCountries.toLowerCase()))

  const handleInputFilterCountries = (event) => {
    setFilterCountries(event.target.value)
    setSelectedCountry(null)
  }

  const handleShowCountry = (country) => {
    setSelectedCountry(country)
  }

  useEffect(() => {
    countriesService
      .getCountries()
      .then(data => setCountries(data))
  }, [])

  return (
    <>
      <section>
        <p>find countries <input type="text" value={filterCountries} onChange={handleInputFilterCountries} /></p>
      </section>
      <section>
        {
          selectedCountry
           ? <CountryCard country={selectedCountry} />
           : filterCountries && (
              <CountryList country={filteredCountries} handleShowCountry={handleShowCountry}/>
            )
        }
      </section>
    </>
  )
}

export default App