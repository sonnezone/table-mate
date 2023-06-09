import React from 'react';

const WeatherRow = ({ weatherData }) => {
    return (
        <div className="weather-row">
            {weatherData.map((weather, index) => (
                <div className="weather-hour" key={index}>
                    <span>{weather.time}</span>
                    <img src={`http://openweathermap.org/img/wn/${weather.icon}.png`} alt="weather-icon" />
                    <span>{weather.temp}°C</span>
                </div>
            ))}
        </div>
    );
};

export default WeatherRow;
