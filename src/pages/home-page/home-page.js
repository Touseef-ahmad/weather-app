import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Header } from './header';
import { WeatherContainer } from './weather-container';
import { StyledWrapper } from './styled';
import { propTypes } from './prop-types';
import { fetchWeatherData } from '../../actions/weather';

function HomePageComponent({ dispatch, loading }) {
  useEffect(() => {
    const getWeatherData = async () => {
      dispatch(fetchWeatherData());
    };
    getWeatherData();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <StyledWrapper />
      {!loading && <WeatherContainer />}
    </div>
  );
}

HomePageComponent.propTypes = propTypes;

const mapStateToProps = ({ weatherReducer }) => ({
  loading: weatherReducer.loading,
});

export const HomePage = connect(mapStateToProps)(HomePageComponent);
