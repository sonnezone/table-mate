import React from 'react';
import {Col, Row} from "reactstrap";

const WeatherRow = ({ weatherData }) => {
    return (
        <Row style={{marginTop: "30px"}} id="scrolly">
            {weatherData.map((weather, index) => (
                <Col xs="2">
                    <div className="weather-hour" key={index}>
                        <span>{weather.time} </span>
                        -
                        <span> {weather.date}</span>
                        <img src={`https://openweathermap.org/img/wn/${weather.icon}.png`} alt="weather-icon" />
                        <span>{weather.temp}°C</span>
                    </div>
                </Col>
            ))}
        </Row>
    );
};

export default WeatherRow;
