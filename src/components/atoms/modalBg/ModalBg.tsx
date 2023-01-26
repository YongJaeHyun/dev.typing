import styled from 'styled-components';
import { WINDOW_WIDTH } from '../../../utils';

export interface Props {
  children: React.ReactNode;
}

const Background = styled.section<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${WINDOW_WIDTH};
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const ModalBg = (props: Props) => {
  return <Background>{props.children}</Background>;
};
