import styled from 'styled-components';

const InputAreaBox = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  @media (max-width: 500px) {
    order: 3;
    flex-grow: 1;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    margin: 16px auto 0;
    width: 90%;
  }
`;

const InputText = styled.input`
  box-sizing: border-box;
  width: 360px;
  margin-right: 8px;
  padding: 10px 16px;
  font-family: 'Zen Maru Gothic', sans-serif;
  color: #909090;
  font-size: 2rem;
  font-weight: 700;
  border-radius: 10px;
  border: none;
  outline: none;
  @media (max-width: 500px) {
    margin: 0;
    width: 100%;
  }
`;

export const InputArea = (props) => {
  const { inputText, onChangeInputText, onClickAdd } = props;

  return (
    <InputAreaBox>
      <InputText type="text" value={inputText} onChange={onChangeInputText} />
      <button className="button large add" onClick={onClickAdd}>
        追加
      </button>
    </InputAreaBox>
  );
};
