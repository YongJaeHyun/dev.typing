import styled, { css } from 'styled-components';

export interface Props {
  isDark?: boolean;
  color?: string;
  name?: string;
}

const Span = styled.span<Props>`
  color: ${(props) => props.color ?? props.theme.textColor.themeDefault};
  ${(props) =>
    props.isDark !== undefined &&
    css`
      left: ${props.isDark ? '8px' : '45px'};
      position: absolute;
      transition: all 0.4s ease-in-out;
    `}
`;

export const Icon = (props: Props) => (
  <Span
    className="material-symbols-rounded"
    color={props.color}
    isDark={props.isDark}
  >
    {props.name}
  </Span>
);
