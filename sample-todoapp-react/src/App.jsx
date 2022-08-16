import { useState } from 'react';
import './styles.css';

export const App = () => {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState([]);
  const onChangeInputText = (e) => setInputText(e.target.value);
  const onClickAdd = () => {
    if (inputText === '') return;
    const newTodoList = [...todoList, inputText];
    setTodoList(newTodoList);
    setInputText('');
    console.log(todoList);
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
          {todoList.map((todo) => {
            return (
              <li key={todo} className="list">
                <p className="todo-text">{todo}</p>
                <button className="button small done">完了</button>
                <button className="button small delete">削除</button>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="done-area">
        <h2 className="title">DONE</h2>
        <ul>
          <li className="list">
            <p className="todo-text">野菜を食べる</p>
            <button className="button small back">戻す</button>
          </li>
        </ul>
      </section>
    </main>
  );
};
