import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { fontWeightSwitch } from '../../../utils';

type TFontWeight = 'LIGHT' | 'REGULAR' | 'MEDIUM' | 'BOLD' | 'BOLDEST';
type TFontFamily = 'Apple SD Gothic Neo' | 'Noto Sans KR' | 'sans-serif';

export interface Props extends HTMLAttributes<HTMLSpanElement> {
  fontSize?: number;
  color?: string;
  value?: string;
  fontWeight?: TFontWeight;
  fontFamily?: TFontFamily;
  as?: React.ElementType;
}

const Span = styled.span<Props>`
  font-size: ${(props) => props.fontSize ?? 16}px;
  font-weight: ${({ fontWeight }) =>
    fontWeight !== undefined && fontWeightSwitch[fontWeight]};
  line-height: 1.2;
  font-family: ${(props) => props.fontFamily};
`;

export const Text = (props: Props) => (
  <Span
    as={props.as}
    fontSize={props.fontSize}
    color={props.color}
    fontWeight={props.fontWeight}
    fontFamily={props.fontFamily}
  >
    {props.value}
  </Span>
);
