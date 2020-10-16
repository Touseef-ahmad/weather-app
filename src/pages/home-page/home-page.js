import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Header } from './header';
import { WeatherForcastChart } from './weather-forcast-chart';
import { Loader } from './loader';
import { propTypes } from './prop-types';
import { fetchWeatherData } from '../../actions/weather';
import { HOME_CITY, RESULTS_NOT_FOUND_MESSAGE } from '../../utils';

function HomePageComponent({
  data,
  dispatch,
  empty,
  error,
  errorMessage,
  isLoading,
  selectedDate,
}) {
  const getWeatherData = async () => {
    dispatch(fetchWeatherData(HOME_CITY));
  };
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div>
      <Header />
      {isLoading && <Loader />}
      {empty && RESULTS_NOT_FOUND_MESSAGE}
      {error && errorMessage}
      {data.map(forcastData => (
        <WeatherForcastChart
          key={forcastData.city.name}
          forcastData={forcastData}
          selectedDate={selectedDate}
        />
      ))}
    </div>
  );
}

HomePageComponent.propTypes = propTypes;

const mapStateToProps = ({ weatherReducer }) => ({
  data: weatherReducer.data,
  empty: weatherReducer.empty,
  error: weatherReducer.error,
  errorMessage: weatherReducer.errorMessage,
  isLoading: weatherReducer.isLoading,
  selectedDate: weatherReducer.selectedDate,
});

export const HomePage = connect(mapStateToProps)(HomePageComponent);
