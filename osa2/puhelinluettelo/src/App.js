import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(gotPersons => {
        setPersons(gotPersons)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    const oldpers = persons.find(n => n.name === newName)
    if(oldpers) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const changed = { ...oldpers, number: newNumber}
        personService
          .changeNumber(changed)
          .then(changedPerson => {
            setPersons(persons.map(pers => pers.id !== changed.id ? pers : changedPerson))
          })
      }
    } else {
      personService
        .create(nameObject)
        .then(returned => {
          setPersons(persons.concat(returned))
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  const handleFilterChange = (event) => {
    setFilterName(event.target.value)
  }

  const deleteHandler = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deletePers(person)
        .then(response => {
          setPersons(persons.filter(pers => pers.id !== person.id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter name={filterName} handler={handleFilterChange}/>

      <h3>Add new</h3>
      <PersonForm addName={addName}
        newName={newName} handleNameChange={handleNameChange}
        newNumber={newNumber} handleNumberChange={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} filter={filterName} deleteHandler={deleteHandler}/>
    </div>
  )

}

export default App
