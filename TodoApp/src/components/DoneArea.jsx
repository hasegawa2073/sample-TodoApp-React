import { ButtonBack } from './ButtonBack';
import { Title } from './Title';
import { Text } from './Text';

export const DoneArea = (props) => {
  const { doneList, onClickBack } = props;

  return (
    <section className="done-area">
      <Title title="DONE" />
      <ul>
        {doneList.map((done, index) => {
          return (
            <li key={done} className="list">
              <Text text={done} />
              <ButtonBack
                onClickBack={() => onClickBack(index)}
                buttonText="戻す"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
