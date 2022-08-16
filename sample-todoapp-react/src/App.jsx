import { useState } from 'react';
import './styles.css';

export const App = () => {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);
  const onChangeInputText = (e) => setInputText(e.target.value);
  const onClickAdd = () => {
    if (inputText === '') return;
    const newTodoList = [...todoList, inputText];
    setTodoList(newTodoList);
    setInputText('');
  };
  const onClickDelete = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };
  const onClickDone = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
    const newDoneList = [...doneList, todoList[index]];
    setDoneList(newDoneList);
  };
  const onClickBack = (index) => {
    const newDoneList = [...doneList];
    newDoneList.splice(index, 1);
    setDoneList(newDoneList);
    const newTodoList = [...todoList, doneList[index]];
    setTodoList(newTodoList);
  };

  return (
    <main>
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
      <section className="done-area">
        <h2 className="title">DONE</h2>
        <ul>
          {doneList.map((done, index) => {
            return (
              <li key={done} className="list">
                <p className="todo-text">{done}</p>
                <button
                  className="button small back"
                  onClick={() => onClickBack(index)}
                >
                  戻す
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
