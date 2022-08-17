import styled from 'styled-components';

const ButtonBaseStyle = styled.button`
  font-family: 'Zen Maru Gothic', sans-serif;
  color: white;
  font-size: 1.6rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;

const ButtonSmallStyle = styled(ButtonBaseStyle)`
  padding: 6px 20px;
`;

const ButtonLargeStyle = styled(ButtonBaseStyle)`
  padding: 8px 24px;
`;

export const ButtonAddStyle = styled(ButtonLargeStyle)`
  background-color: #ffb01c;
  @media (max-width: 500px) {
    font-size: 1.8rem;
    margin-top: 8px;
    padding: 16px 0;
    width: 100%;
  }
`;

export const ButtonDoneStyle = styled(ButtonSmallStyle)`
  margin-right: 8px;
  background-color: #96caf8;
  @media (max-width: 500px) {
    margin-right: 2px;
  }
`;

export const ButtonDeleteStyle = styled(ButtonSmallStyle)`
  background-color: #89d92b;
`;

export const ButtonBackStyle = styled(ButtonSmallStyle)`
  background-color: #b7b7b7;
`;
