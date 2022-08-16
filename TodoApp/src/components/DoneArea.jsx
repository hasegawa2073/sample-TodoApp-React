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
  );
};
