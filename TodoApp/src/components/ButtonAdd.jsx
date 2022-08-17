import { ButtonAddStyle } from './ButtonStyle';

export const ButtonAdd = (props) => {
  const { onClickAdd, buttonText } = props;

  return <ButtonAddStyle onClick={onClickAdd}>{buttonText}</ButtonAddStyle>;
};
