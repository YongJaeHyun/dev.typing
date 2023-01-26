import styled from 'styled-components';

export interface Props {
  fill?: number;
  size?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Btn = styled.button<Props>`
  width: 30px;
  height: 30px;

  border-radius: 15px;
  cursor: pointer;
  font-variation-settings: 'FILL' ${(props) => props.fill ?? 0}, 'wght' 500,
    'GRAD' 0, 'opsz' ${(props) => props.size ?? 20};
  background-color: transparent;
  &:hover {
    padding: 3px solid ${(props) => props.theme.textColor.light_black};
  }
`;

export const Button = (props: Props) => (
  <Btn onClick={props.onClick} fill={props.fill} size={props.size}>
    {props.children}
  </Btn>
);
