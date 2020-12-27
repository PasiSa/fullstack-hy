import React, { useState } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'
import CountryDetails from './components/CountryDetails'

const App = () => {
  const [ findInput, setFindInput ] = useState('')
  const [ countries, setCountries ] = useState('')
  const [ selected, setSelected ] = useState(null)

  const handleFindChange = (event) => {
    setFindInput(event.target.value)
    axios
      .get(`https://restcountries.eu/rest/v2/name/${event.target.value}`)
      .then(response => {
        setCountries(response.data)
      })
      .catch(err => {
        setCountries([])
      })
  }

  return (
    <div>
      find countries
      <input value={findInput} onChange={handleFindChange}/>
      <CountryList countries={countries} handler={setSelected}/>
      <CountryDetails country={selected} />
    </div>
  );
}

export default App
