export const InputArea = (props) => {
  const { inputText, onChangeInputText, onClickAdd } = props;

  return (
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
  );
};
