import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  width: string;
}

const Input = styled.img<Props>`
  width: ${(props) => props.width};
`;

const TypingInput = (props: Props) => {
  <Input width={props.width} height={props.height} />;
};

export default TypingInput;
