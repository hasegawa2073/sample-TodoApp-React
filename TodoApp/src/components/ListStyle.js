import styled from 'styled-components';

export const UlStyle = styled.ul`
  margin: 0;
  padding-left: 52px;
  @media screen and (max-width: 500px) {
    margin: 0;
    padding-left: 10%;
  }
`;

export const ListStyle = styled.li`
  margin-top: 12px;
  ::marker {
    color: #707070;
    font-size: 1.2rem;
  }
`;
