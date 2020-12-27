import React from 'react'

const Weather = ({weather}) => {
  if (weather) {
    return (
      <div>
        <h2>Weather in {weather.location.name}</h2>
        <b>temperature: </b>{weather.current.temperature} celsius<br/>
        <img src={weather.current.weather_icons[0]} alt="yesyes"/><br/>
        <b>wind: </b>{weather.current.wind_speed} mph, direction {weather.current.wind_dir}
      </div>
    )
  }
  return ( <div></div> )
}

export default Weather
