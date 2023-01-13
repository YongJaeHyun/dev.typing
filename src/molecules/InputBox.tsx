import TextBox from '../atoms/TextBox';
import TextInput from '../atoms/TextInput';

interface IInputBox {
  id: string;
  value: string;
}

const InputBox = ({ id, value }: IInputBox) => (
  <TextBox className="no-drag">
    <TextInput id={id} as="span">
      {value}
    </TextInput>
  </TextBox>
);

export default InputBox;
