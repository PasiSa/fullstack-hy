import React from 'react'

const Country = (props) => {
  return (
    <div>
      {props.country.name}
      <button onClick={props.handler}>show</button>
    </div>
  )
}

const CountryList = ({countries, handler}) => {
  if (countries.length > 10) {
    handler(null)
    return (
      <div>
        Too many countries,specify another filter
      </div>)
  }
  if (countries.length > 1) {
    return (
      <div>
        {countries.map(country =>
          <Country
            key={country.alpha2code}
            country={country}
            handler={() => handler(country)}
          />)}
      </div>
    )
  }
  if (countries.length === 1) {
    handler(countries[0])
    return (
      <div></div>
    )
  }
  handler(null)
  return (
    <div>No matching countries.</div>
  )
}

export default CountryList
