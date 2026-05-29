import CountryCard from "./CountryCard"

const CountryList = ({ country, handleShowCountry }) => {
    if (country.length > 10) return <span>to many matches</span>
    if (country.length === 1) return <CountryCard country={country[0]}/>
    return (
      <ul>
        {
           country.map(c => <li key={c.cca3}>{c.name.common} <button onClick={() => handleShowCountry(c)}>Show</button></li>)
        }
       </ul>
    )
  }

export default CountryList