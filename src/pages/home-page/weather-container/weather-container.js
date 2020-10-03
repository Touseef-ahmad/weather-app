import React from 'react';
import { connect } from 'react-redux';
import { Chart } from './chart';
import { setSelectedDate, setSelectedCity } from '../../../actions/weather';
import {
  StyledButton,
  StyledColumn,
  StyledHeaderRow,
  StyledRow,
  StyledSelect,
  StyledSpan,
  StyledWrapper,
} from './styled';
import { getDayFromDate, getForcastByDate, getDateList, ICON_CLASS_NAMES } from '../../../utils';
import { propTypes } from './prop-types';

const WeatherContainerComponent = ({ cityNames, data, dispatch, selectedCity, selectedDate }) => {
  const indexOfSelectedCity = cityNames.indexOf(selectedCity);
  const forcastDataOfSelectedCity = data[indexOfSelectedCity];
  const threeHourForcastList = getForcastByDate(forcastDataOfSelectedCity, selectedDate);
  const forcastOfcurrentHour = threeHourForcastList[0];
  const {
    main,
    weather,
    dt_txt: dataText,
    wind,
    pop: probabilityOfPrecipitation,
  } = forcastOfcurrentHour;
  const { humidity, temp: temperature } = main;
  const { speed: windSpeed } = wind;
  const { main: weatherDiscription } = weather[0];
  const day = getDayFromDate(dataText);
  const precipitation = probabilityOfPrecipitation * 100;
  const fiveDaysForcastDateList = getDateList(forcastDataOfSelectedCity);

  const handleClick = date => dispatch(setSelectedDate(date));
  const selectCity = event => dispatch(setSelectedCity(event.target.value));

  return (
    <StyledWrapper>
      <StyledHeaderRow>
        <StyledColumn>
          <StyledSelect onChange={selectCity}>
            {cityNames.map(name => (
              <option value={name}>{name}</option>
            ))}
          </StyledSelect>
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
          <StyledColumn>
            <StyledButton key={date} type='button' onClick={() => handleClick(date)}>
              {getDayFromDate(date)}
            </StyledButton>
          </StyledColumn>
        ))}
      </StyledRow>
    </StyledWrapper>
  );
};

WeatherContainerComponent.propTypes = propTypes;

const mapStateToProps = ({ weatherReducer }) => ({
  cityNames: weatherReducer.cityNames,
  selectedCity: weatherReducer.selectedCity,
  data: weatherReducer.data,
  selectedDate: weatherReducer.selectedDate,
});

export const WeatherContainer = connect(mapStateToProps)(WeatherContainerComponent);
