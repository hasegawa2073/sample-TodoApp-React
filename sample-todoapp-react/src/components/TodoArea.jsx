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
      <div className="input-area">
        <input
          className="input-text"
          type="text"
          value={inputText}
          onChange={onChangeInputText}
        />
        <button className="button large add" onClick={onClickAdd}>
          追加
        </button>
      </div>
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
