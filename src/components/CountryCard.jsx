import { useState, useEffect } from "react"
import weatherService from '../services/weather'

const CountryCard = ({ country }) => {

  const [weather, setWeather] = useState(null)
  
  useEffect(() => {
    if (!country.capital || country.capital === 0) return

    weatherService
        .getWeather(country)
        .then(data => setWeather(data))
  }, [country])
  return (
    <>
      <section>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages).map(l => <li key={l}>{l}</li>)}
        </ul>
        <br />
        <img src={country.flags.svg} alt={`Bandera de ${country.name.common}`} title={`Bandera de ${country.name.common}`} height='200' />
      </section>
        {
          weather && (
            <section>
              <h3>Weather in {country.capital}</h3>
              <p>Temperature: {weather.main.temp} Celsius</p>
              <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`Imagen de clima de ${country.capital}`} />
              <p>Wind: {weather.wind.speed} m/s</p>
            </section>
          )
        }
    </>
  )
}

export default CountryCard