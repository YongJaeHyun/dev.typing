import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  opacity?: number;
}

const Input = styled.input<Props>`
  width: 100%;
  opacity: ${(props) => props.opacity ?? 1};
  z-index: ${(props) => (props.opacity === 0 ? -999 : 0)};
  caret-color: ${(props) => props.theme.accentColor};
`;

const UserInput = (props: Props) => (
  <Input opacity={props.opacity} spellCheck={false} autoComplete="off" />
);
export default UserInput;
