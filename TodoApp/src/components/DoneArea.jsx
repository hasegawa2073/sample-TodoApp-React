import { ButtonBack } from './ButtonBack';

export const DoneArea = (props) => {
  const { doneList, onClickBack } = props;

  return (
    <section className="done-area">
      <h2 className="title">DONE</h2>
      <ul>
        {doneList.map((done, index) => {
          return (
            <li key={done} className="list">
              <p className="todo-text">{done}</p>
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
