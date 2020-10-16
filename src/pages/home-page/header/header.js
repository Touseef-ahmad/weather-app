import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchWeatherData } from '../../../actions/weather';
import { propTypes } from './prop-types';
import {
  StyledBrandName,
  StyledButton,
  StyledForm,
  StyledHeader,
  StyledInput,
  StyledLinkWrapper,
  StyledLogoContainer,
} from './styled';

function HeaderComponent({ dispatch }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.value);
    dispatch(fetchWeatherData(event.target.value));
  };

  const handleClick = event => {
    event.preventDefault();
    dispatch(fetchWeatherData(query));
  };

  return (
    <StyledHeader>
      <StyledLinkWrapper>
        <StyledLogoContainer>
          <i className='fa fa-cloud fa-4x' />
          <StyledBrandName>Mosam&trade;</StyledBrandName>
        </StyledLogoContainer>
      </StyledLinkWrapper>
      <StyledForm>
        <StyledInput
          value={query}
          onChange={handleChange}
          placeholder='Weather in your city'
          type='text'
        />
        <StyledButton onClick={handleClick}>
          <i className='fa fa-search' />
        </StyledButton>
      </StyledForm>
    </StyledHeader>
  );
}

HeaderComponent.propTypes = propTypes;

export const Header = connect(null)(HeaderComponent);
