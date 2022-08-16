import { useState } from 'react';
import './styles.css';
import { TodoArea } from './components/TodoArea';
import { DoneArea } from './components/DoneArea';

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
      <TodoArea
        inputText={inputText}
        onChangeInputText={onChangeInputText}
        onClickAdd={onClickAdd}
        todoList={todoList}
        onClickDone={onClickDone}
        onClickDelete={onClickDelete}
      />
      <DoneArea doneList={doneList} onClickBack={onClickBack} />
    </main>
  );
};
