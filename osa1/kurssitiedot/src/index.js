import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.title} {props.exnum}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part title={props.p1.name} exnum={props.p1.exercises} />
      <Part title={props.p2.name} exnum={props.p2.exercises} />
      <Part title={props.p3.name} exnum={props.p3.exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.p1.exercises + props.p2.exercises + props.p3.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>      
      <Header name={course} />
      <Content p1={part1} p2={part2} p3={part3} />
      <Total p1={part1} p2={part2} p3={part3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
