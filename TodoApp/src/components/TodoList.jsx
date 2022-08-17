import { ButtonDone } from './ButtonDone';
import { ButtonDelete } from './ButtonDelete';
import { Title } from './Title';
import { Text } from './Text';
import { UlStyle } from './ListStyle';
import { ListStyle } from './ListStyle';

export const TodoList = (props) => {
  const { todoList, onClickDone, onClickDelete } = props;

  return (
    <>
      <Title title="TODOリスト" />
      <UlStyle>
        {todoList.map((todo, index) => {
          return (
            <ListStyle key={todo}>
              <Text text={todo} />
              <ButtonDone
                onClickDone={() => onClickDone(index)}
                buttonText="完了"
              />
              <ButtonDelete
                onClickDelete={() => onClickDelete(index)}
                buttonText="削除"
              />
            </ListStyle>
          );
        })}
      </UlStyle>
    </>
  );
};
