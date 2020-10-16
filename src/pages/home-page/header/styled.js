import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.primaryColor};
  display: flex;
  padding: 20px;
`;

export const StyledLinkWrapper = styled.div`
  a {
    color: black;
    text-decoration: none;
  }
`;

export const StyledLogoContainer = styled.div`
  align-items: center;
  color: white;
  display: flex;
  padding-left: 100px;
`;

export const StyledBrandName = styled.span`
  font-size: 20px;
  font-weight: bolder;
  margin: 0 10px;
`;

export const StyledForm = styled.form`
  margin: auto;
`;

export const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.primaryColor};
  border: none;
  border-bottom: 1px solid transparent;
  color: white;
  padding: 5px;
  &:focus {
    border-bottom: 1px solid white;
    outline: none;
  }
  &::placeholder {
    color: #dddddd;
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  &:focus {
    outline: none;
  }
`;
