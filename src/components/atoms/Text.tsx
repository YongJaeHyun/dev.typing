import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  fontSize: number;
  color?: string;
}

const Span = styled.div<Props>`
  font-size: ${(props) => props.fontSize ?? 16};
  color: ${(props) => props.color ?? props.theme.textColor};
`;

const Text = (props: Props) => {
  <Span fontSize={props.fontSize} color={props.color} />;
};

export default Text;
