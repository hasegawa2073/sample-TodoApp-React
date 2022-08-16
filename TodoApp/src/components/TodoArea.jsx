import { InputArea } from './InputArea';
import { TodoList } from './TodoList';

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
      <InputArea
        inputText={inputText}
        onChangeInputText={onChangeInputText}
        onClickAdd={onClickAdd}
      />
      <TodoList
        todoList={todoList}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
    </section>
  );
};
