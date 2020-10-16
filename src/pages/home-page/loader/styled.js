import styled, { keyframes } from 'styled-components';

const loaderAnimation = keyframes`
  0% {transform: rotate(0deg); }
  100% {transform: rotate(360deg); }
`;

export const StyledLoader = styled.div`
  animation: spin 0.5s linear infinite;
  animation-name: ${loaderAnimation};
  border-radius: 50%;
  border: 5px solid #f3f3f3;
  border-top: 5px solid ${({ theme }) => theme.primaryColor};
  visibility: ${props => (props.visibility ? 'hidden' : 'visible')};
  height: 30px;
  margin: 10px auto;
  width: 30px;
`;
