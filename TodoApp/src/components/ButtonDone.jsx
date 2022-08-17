import { ButtonDoneStyle } from './ButtonStyle';

export const ButtonDone = (props) => {
  const { index, onClickDone, buttonText } = props;

  return (
    <ButtonDoneStyle onClick={() => onClickDone(index)}>
      {buttonText}
    </ButtonDoneStyle>
  );
};
