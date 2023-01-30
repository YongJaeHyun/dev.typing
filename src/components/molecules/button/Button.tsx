import styled, { css } from 'styled-components';

export interface Props {
  width?: string;
  height?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onHover?: boolean;
  children: React.ReactNode;
  padding?: string;
  borderRadius?: string;
  border?: string;
  isAccentBtn?: boolean;
}

const Btn = styled.button<Props>`
  display: inline-flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  justify-content: center;
  align-items: center;
  color: white;
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  cursor: pointer;
  background-color: ${(props) =>
    props.isAccentBtn === true
      ? props.theme.accentColor.themeDefault
      : 'transparent'};
  padding: ${(props) => props.padding};
  ${(props) =>
    props.onHover === true &&
    css`
      transition: all 0.3s ease-in-out;
      &:hover {
        scale: 1.2;
      }
    `}
`;

export const Button = (props: Props) => (
  <Btn
    onClick={props.onClick}
    padding={props.padding}
    border={props.border}
    borderRadius={props.borderRadius}
    onHover={props.onHover}
    isAccentBtn={props.isAccentBtn}
    width={props.width}
    height={props.height}
  >
    {props.children}
  </Btn>
);
