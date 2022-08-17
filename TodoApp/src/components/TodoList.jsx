import { ButtonDone } from './ButtonDone';

export const TodoList = (props) => {
  const { todoList, onClickDone, onClickDelete } = props;

  return (
    <>
      <h2 className="title">TODOリスト</h2>
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li key={todo} className="list">
              <p className="todo-text">{todo}</p>
              <ButtonDone
                onClickDone={() => onClickDone(index)}
                buttonText="完了"
              />
              <button
                className="button small done"
                onClick={() => onClickDone(index)}
              >
                完了
              </button>
              <button
                className="button small delete"
                onClick={() => onClickDelete(index)}
              >
                削除
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
