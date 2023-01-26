import styled from 'styled-components';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../../../utils';
import { ModalBg } from '../../atoms/modalBg/ModalBg';

export interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${WINDOW_WIDTH / 4}px;
  height: ${WINDOW_HEIGHT / 4}px;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${(props) => props.theme.bgColor.themeDefault};
  border: 3px solid ${(props) => props.theme.accentColor.themeDefault};
  border-radius: 10px;
`;

export const ModalContainer = (props: Props) => {
  return (
    <ModalBg>
      <Container>{props.children}</Container>
    </ModalBg>
  );
};
