import styled from 'styled-components';

export interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Btn = styled.button<Props>`
  border-radius: 15px;
  cursor: pointer;
  background-color: transparent;
`;

export const Button = (props: Props) => (
  <Btn onClick={props.onClick}>{props.children}</Btn>
);
