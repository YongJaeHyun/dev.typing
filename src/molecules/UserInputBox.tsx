import { ChangeEvent } from 'react';
import TextInput from '../atoms/TextInput';
import UserTextBox from '../atoms/UserTextBox';

interface IUserInputBox {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const UserInputBox = ({ name, onChange, placeholder }: IUserInputBox) => (
  <UserTextBox>
    <TextInput
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
      spellCheck="false"
    />
  </UserTextBox>
);

export default UserInputBox;
