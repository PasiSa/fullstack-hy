import React, { useState } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'

const App = () => {
  const [ findInput, setFindInput ] = useState('')
  const [ countries, setCountries ] = useState('')

  const handleFindChange = (event) => {
    setFindInput(event.target.value)
    axios
      .get(`https://restcountries.eu/rest/v2/name/${event.target.value}`)
      .then(response => {
        console.log(response)
        console.log(response.data.length)
        setCountries(response.data)
      })
      .catch(err => {
        console.log('error', err.response)
        setCountries([])
      })
  }

  return (
    <div>
      find countries
      <input value={findInput} onChange={handleFindChange}/>
      <CountryList countries={countries} />
    </div>
  );
}

export default App
