import { ButtonBackStyle } from './ButtonStyle';

export const ButtonBack = (props) => {
  const { index, onClickBack, buttonText } = props;

  return (
    <ButtonBackStyle onClick={() => onClickBack(index)}>
      {buttonText}
    </ButtonBackStyle>
  );
};
