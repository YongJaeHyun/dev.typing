import styled from 'styled-components';
import { ModalBg } from '../../atoms/modalBg/ModalBg';

export interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${(props) => props.theme.bgColor.themeDefault};
  border: 3px solid ${(props) => props.theme.accentColor.themeDefault};
  border-radius: 10px;
  box-shadow: 8px 8px 5px 0px rgba(64, 64, 64, 0.5);
`;

export const ModalContainer = (props: Props) => {
  return (
    <ModalBg>
      <Container>{props.children}</Container>
    </ModalBg>
  );
};
