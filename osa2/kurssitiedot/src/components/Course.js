import React from 'react'

const Header = (props) => {
    return (
      <h2>{props.name}</h2>
    )
  }
  
  const Part = (props) => {
    return (
      <p>{props.title} {props.exnum}</p>
    )
  }
  
  const Content = (props) => {
    const retval = props.parts.map(value =>
      <Part key={value.id} title={value.name} exnum={value.exercises} />)
    console.log(retval)
    return(retval)
  }
  
  const Total = ({parts}) => {
    const total = parts.reduce((prev, current, index) => prev + current.exercises, 0)
    return (
      <p><b>total of {total} exercises</b></p>
    )
  }
  
  const Course = ({course}) => {
    return (
      <div>      
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }
  
  export default Course
  