import React from 'react';
import { connect } from 'react-redux';
import { Chart } from './chart';
import { onSelectDay } from '../../../actions/weather';

import {
  StyledButton,
  StyledCard,
  StyledCityNameWrapper,
  StyledColumn,
  StyledHeaderRow,
  StyledRow,
  StyledSpan,
  StyledWrapper,
} from './styled';

import { filterForcastData, getDayFromDate, ICON_CLASS_NAMES } from '../../../utils';

import { propTypes } from './prop-types';

const WeatherForcastChartComponent = ({ forcastData, dispatch, selectedDate }) => {
  const {
    cityName,
    day,
    fiveDaysForcastDateList,
    humidity,
    precipitation,
    temperature,
    weatherDiscription,
    windSpeed,
    threeHourForcastList,
  } = filterForcastData(forcastData, selectedDate);

  const handleClick = (cityName, date) => dispatch(onSelectDay(cityName, date));

  return (
    <StyledWrapper>
      <StyledCard>
        <StyledHeaderRow>
          <StyledColumn>
            <StyledCityNameWrapper>
              <span>{cityName}</span>
            </StyledCityNameWrapper>
            <StyledSpan>{day}</StyledSpan>
            <StyledSpan>
              <i className={ICON_CLASS_NAMES[weatherDiscription]} />
              {weatherDiscription}
            </StyledSpan>
            <StyledSpan> {temperature} &deg;C</StyledSpan>
          </StyledColumn>
          <StyledColumn>
            <StyledSpan>
              <i className='fa fa-tint' />
              Humidity: {humidity}%
            </StyledSpan>
            <StyledSpan>
              <i className='fa fa-wind' />
              Wind: {windSpeed} km/h
            </StyledSpan>
            <StyledSpan>
              <i className='fa fa-umbrella' />
              Precepitation: {precipitation}%
            </StyledSpan>
          </StyledColumn>
        </StyledHeaderRow>
        <StyledRow>
          <StyledSpan>
            <Chart threeHourForcastList={threeHourForcastList} />
          </StyledSpan>
        </StyledRow>
        <StyledRow>
          {fiveDaysForcastDateList.map(date => (
            <StyledColumn key={date}>
              <StyledButton type='button' onClick={() => handleClick(cityName, date)}>
                {getDayFromDate(date)}
              </StyledButton>
            </StyledColumn>
          ))}
        </StyledRow>
      </StyledCard>
    </StyledWrapper>
  );
};

WeatherForcastChartComponent.propTypes = propTypes;

export const WeatherForcastChart = connect(null)(WeatherForcastChartComponent);
