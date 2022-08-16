import './styles.css';

export const App = () => {
  return (
    <main>
      <div>
        <input type="text" />
        <button className="button large add">追加</button>
        <h2 className="title">TODOリスト</h2>
        <ul>
          <li>
            <p className="todoText">図書館に行く</p>
            <button className="button small done">完了</button>
            <button className="button small delete">削除</button>
          </li>
          <li>
            <p className="todoText">5km歩く</p>
            <button className="button small done">完了</button>
            <button className="button small delete">削除</button>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="title">DONE</h2>
        <ul>
          <li>
            <p className="todoText">野菜を食べる</p>
            <button className="button small back">戻す</button>
          </li>
        </ul>
      </div>
    </main>
  );
};
