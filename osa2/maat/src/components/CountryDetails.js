import React from 'react'

const CountryDetails = ({country}) => {
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
      </div>
    )
  }
  return (
    <div></div>
  )
}

export default CountryDetails
