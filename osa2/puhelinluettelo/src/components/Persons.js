import React from 'react'

const Person = ({person, deleteHandler}) => {
  return (
    <div>
      {person.name} {person.number}
      <button onClick={deleteHandler}>delete</button>
    </div>
  )
}

const Persons = ({persons, filter, deleteHandler}) => {
  const namesToShow = persons.filter(pers =>
    pers.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      {namesToShow.map(pers =>
        <Person key={pers.name} person={pers} deleteHandler={() => deleteHandler(pers)}/>
      )}
    </div>
  )
}

export default Persons
