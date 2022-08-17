import styled from 'styled-components';

const TextStyle = styled.p`
  display: inline-block;
  margin: 0 16px 0 0;
  font-family: 'Zen Maru Gothic', sans-serif;
  font-size: 2rem;
  color: #707070;
  font-weight: 700;
  @media (max-width: 500px) {
    font-size: 1.8rem;
    margin-right: 4px;
  }
`;

export const Text = (props) => {
  const { text } = props;

  return <TextStyle>{text}</TextStyle>;
};
