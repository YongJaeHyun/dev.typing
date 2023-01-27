import styled, { css } from 'styled-components';

export interface Props {
  isDark?: boolean;
  color?: string;
  fill?: number;
  size?: number;
  name?: string;
}

const Span = styled.span<Props>`
  font-variation-settings: 'FILL' ${(props) => props.fill ?? 0}, 'wght' 500,
    'GRAD' 0, 'opsz' ${(props) => props.size ?? 20};
  display: inline;
  color: ${(props) => props.color ?? props.theme.textColor.themeDefault};
  ${(props) =>
    props.isDark !== undefined &&
    css`
      transform: translate(-50%, -50%);
      left: ${props.isDark ? '17px' : '59px'};
      position: absolute;
      transition: all 0.4s ease-in-out;
    `}
`;

export const Icon = (props: Props) => (
  <Span
    className="material-symbols-rounded"
    color={props.color}
    isDark={props.isDark}
    fill={props.fill}
    size={props.size}
  >
    {props.name}
  </Span>
);
