import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const StyledCityNameWrapper = styled.span`
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bolder;
  padding: 5px 20px;
`;

export const StyledCard = styled.div`
  box-shadow: 3px 3px 5px 6px ${({ theme }) => theme.secondaryGreyColor};
  margin: 30px;
`;

export const StyledSpan = styled.span`
  margin: 10px 20px;
`;

export const StyledHeaderRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledColumn = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  background-color: white;
  border: none;
  color: black;
  padding: 20px;
`;
