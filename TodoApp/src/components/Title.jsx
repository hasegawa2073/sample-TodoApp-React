import styled from 'styled-components';

const TitleStyle = styled.h2`
  margin: 0;
  padding-left: 40px;
  font-family: 'Zen Maru Gothic', sans-serif;
  font-size: 2.4rem;
  color: #707070;
  @media (max-width: 500px) {
    font-size: 2rem;
    margin: 0 auto;
    padding-left: 0;
    width: 88%;
  }
`;

export const Title = (props) => {
  const { title } = props;

  return <TitleStyle>{title}</TitleStyle>;
};
