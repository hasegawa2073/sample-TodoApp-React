import { InputArea } from './InputArea';

export const TodoArea = (props) => {
  const {
    inputText,
    onChangeInputText,
    onClickAdd,
    todoList,
    onClickDone,
    onClickDelete,
  } = props;

  return (
    <section className="todo-area">
      <InputArea
        inputText={inputText}
        onChangeInputText={onChangeInputText}
        onClickAdd={onClickAdd}
      />
      <h2 className="title">TODOリスト</h2>
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li key={todo} className="list">
              <p className="todo-text">{todo}</p>
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
    </section>
  );
};
