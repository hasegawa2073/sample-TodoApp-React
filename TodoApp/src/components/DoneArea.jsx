import styled from 'styled-components';
import { ButtonBack } from './ButtonBack';
import { Title } from './Title';
import { Text } from './Text';
import { UlStyle } from './ListStyle';
import { ListStyle } from './ListStyle';

const DoneAreaStyle = styled.section`
  margin-top: 10px;
  padding: 20px 0px 20px;
  background-color: #c1e2ff;
  border-radius: 10px;
  min-height: 200px;
  @media (max-width: 500px) {
    order: 1;
    flex-grow: 0.3;
    min-height: 0;
    margin: 0 0 10px;
  }
`;

export const DoneArea = (props) => {
  const { doneList, onClickBack } = props;

  return (
    <DoneAreaStyle>
      <Title title="DONE" />
      <UlStyle>
        {doneList.map((done, index) => {
          return (
            <ListStyle key={done}>
              <Text text={done} />
              <ButtonBack
                onClickBack={() => onClickBack(index)}
                buttonText="戻す"
              />
            </ListStyle>
          );
        })}
      </UlStyle>
    </DoneAreaStyle>
  );
};
