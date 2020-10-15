import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Header } from './header';
import { WeatherContainer } from './weather-container';
import { propTypes } from './prop-types';
import { fetchWeatherData } from '../../actions/weather';

function HomePageComponent({ data, dispatch, selectedDate }) {
  const homeCity = 'Lahore, PK';
  const getWeatherData = async () => {
    dispatch(fetchWeatherData(homeCity));
  };
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div>
      <Header />
      {data.map(response => (
        <WeatherContainer
          key={response.city.name}
          response={response}
          selectedDate={selectedDate}
        />
      ))}
    </div>
  );
}

HomePageComponent.propTypes = propTypes;

const mapStateToProps = ({ weatherReducer }) => ({
  data: weatherReducer.data,
  isLoading: weatherReducer.isLoading,
  selectedDate: weatherReducer.selectedDate,
});

export const HomePage = connect(mapStateToProps)(HomePageComponent);
