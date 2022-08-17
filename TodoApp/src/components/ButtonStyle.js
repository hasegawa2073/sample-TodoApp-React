import styled from 'styled-components';

const ButtonBaseStyle = styled.button`
  font-family: 'Zen Maru Gothic', sans-serif;
  color: white;
  font-size: 1.6rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const ButtonSmallStyle = styled(ButtonBaseStyle)`
  padding: 6px 20px;
`;

export const ButtonDoneStyle = styled(ButtonSmallStyle)`
  margin-right: 8px;
  background-color: #96caf8;
`;

export const ButtonDeleteStyle = styled(ButtonSmallStyle)`
  background-color: #89d92b;
`;

const ButtonBack = styled(ButtonSmallStyle)`
  background-color: #b7b7b7;
`;
