import styled from 'styled-components';

const ButtonBaseStyle = styled.button`
  font-family: 'Zen Maru Gothic', sans-serif;
  color: white;
  font-size: 1.6rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const ButtonSmall = styled(ButtonBaseStyle)`
  padding: 6px 20px;
`;

const ButtonDoneStyle = styled(ButtonSmall)`
  margin-right: 8px;
  background-color: #96caf8;
`;

const ButtonDelete = styled(ButtonSmall)`
  background-color: #89d92b;
`;

const ButtonBack = styled(ButtonSmall)`
  background-color: #b7b7b7;
`;

export default ButtonDoneStyle;
