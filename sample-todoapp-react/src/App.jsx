import './styles.css';

export const App = () => {
  return (
    <main>
      <div>
        <input type="text" />
        <button>追加</button>
        <h2>TODOリスト</h2>
        <ul>
          <li>
            <p>図書館に行く</p>
            <button>完了</button>
            <button>削除</button>
          </li>
          <li>
            <p>5km歩く</p>
            <button>完了</button>
            <button>削除</button>
          </li>
        </ul>
      </div>
      <div>
        <h2>DONE</h2>
        <ul>
          <li>
            <p>野菜を食べる</p>
            <button>戻す</button>
          </li>
        </ul>
      </div>
    </main>
  );
};
