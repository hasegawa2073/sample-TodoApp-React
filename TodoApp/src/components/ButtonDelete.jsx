import { ButtonDeleteStyle } from './ButtonStyle';

export const ButtonDelete = (props) => {
  const { index, onClickDelete, buttonText } = props;

  return (
    <ButtonDeleteStyle onClick={() => onClickDelete(index)}>
      {buttonText}
    </ButtonDeleteStyle>
  );
};
