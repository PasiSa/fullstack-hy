import React from 'react'

const Person = ({person}) => {
  return (
    <div>{person.name} {person.number}<br/></div>
  )
}

const Persons = ({persons, filter}) => {
  const namesToShow = persons.filter(pers =>
    pers.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      {namesToShow.map(pers =>
        <Person key={pers.name} person={pers} />
      )}
    </div>
  )
}

export default Persons
