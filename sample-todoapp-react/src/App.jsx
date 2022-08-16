import './styles.css';

export const App = () => {
  return (
    <main>
      <section className="todo-area">
        <div className="input-area">
          <input className="input-text" type="text" />
          <button className="button large add">追加</button>
        </div>
        <h2 className="title">TODOリスト</h2>
        <ul>
          <li className="list">
            <p className="todo-text">図書館に行く</p>
            <button className="button small done">完了</button>
            <button className="button small delete">削除</button>
          </li>
          <li className="list">
            <p className="todo-text">5km歩く</p>
            <button className="button small done">完了</button>
            <button className="button small delete">削除</button>
          </li>
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
