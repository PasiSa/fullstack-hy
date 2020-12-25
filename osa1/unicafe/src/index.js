import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = ({ good, neutral, bad}) => {
  const All = () => (good + neutral + bad)
  const Average = () => ((good * 1) + (bad * -1)) / All()
  const Positive = () => good / All() * 100
  
  if (All() === 0) {
    return (
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  
  return (
    <div>
      <h1>statistics</h1>
      good: {good}<br/>
      neutral: {neutral}<br/>
      bad: {bad}<br/>
      all: {All()}<br/>
      average: {Average()}<br/>
      positive: {Positive()} %<br/>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)