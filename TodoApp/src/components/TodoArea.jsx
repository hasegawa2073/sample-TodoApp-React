import styled from 'styled-components';
import { InputArea } from './InputArea';
import { TodoList } from './TodoList';

const ToDoAreaStyle = styled.section`
  padding: 20px 0px 20px;
  background-color: #c9c9c9;
  border-radius: 10px;
  min-height: 250px;
  @media (max-width: 500px) {
    order: 2;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    min-height: 0;
  }
`;

export const TodoArea = (props) => {
  const {
    inputText,
    onChangeInputText,
    onClickAdd,
    todoList,
    onClickDone,
    onClickDelete,
    buttonText,
  } = props;

  return (
    <ToDoAreaStyle>
      <InputArea
        inputText={inputText}
        onChangeInputText={onChangeInputText}
        onClickAdd={onClickAdd}
      />
      <TodoList
        todoList={todoList}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
        buttonText={buttonText}
      />
    </ToDoAreaStyle>
  );
};
