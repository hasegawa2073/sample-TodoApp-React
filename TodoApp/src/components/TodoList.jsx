import { ButtonDone } from './ButtonDone';
import { ButtonDelete } from './ButtonDelete';
import { Title } from './Title';

export const TodoList = (props) => {
  const { todoList, onClickDone, onClickDelete } = props;

  return (
    <>
      <Title title="TODOリスト" />
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li key={todo} className="list">
              <p className="todo-text">{todo}</p>
              <ButtonDone
                onClickDone={() => onClickDone(index)}
                buttonText="完了"
              />
              <ButtonDelete
                onClickDelete={() => onClickDelete(index)}
                buttonText="削除"
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
