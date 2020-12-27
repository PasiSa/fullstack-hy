import React,{ useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const CountryDetails = ({ country, weather, setWeather }) => {
  useEffect(() => {
    console.log(country)
    if (country) {
      axios
        .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.capital}`)
        .then(response => {
          console.log(response)
          setWeather(response.data)
      })
    }
  }, [country, setWeather])

  if (country) {
    return (
      <div>
        <h1>{country.name}</h1>
        capital: {country.capital}<br/>
        population: {country.population}

        <h2>Spoken languages</h2>
        <ul>
          {country.languages.map(lang =>
            <li key={lang.name}>{lang.name}</li>)}
        </ul>

        <img src={country.flag} alt="flag" width="200"/>

        <Weather weather={weather} />
      </div>
    )
  }
  return (
    <div></div>
  )
}

export default CountryDetails
