import React from 'react'
import CountryDetails from './CountryDetails'

const Country = (props) => {
  console.log(props.country.name)
  return (
    <div>{props.country.name}</div>
  )
}

const CountryList = ({countries}) => {
  const namesToShow = () => {
    if (countries.length > 10) {
      return (
        <div>
          Too many countries,specify another filter
        </div>)
    }
    if (countries.length > 1) {
      return (
        <div>
          {countries.map(country =>
            <Country key={country.alpha2code} country={country}/>)}
        </div>
      )
    }
    if (countries.length === 1) {
      return (
        <CountryDetails country={countries[0]} />
      )
    }
    return (
      <div>No matching countries.</div>
    )
  }

  return (
    <div>{namesToShow()}</div>
  )
}

export default CountryList
