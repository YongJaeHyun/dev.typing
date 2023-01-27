import styled, { css } from 'styled-components';
import { Icon } from '../../atoms/icon/Icon';
import { Image } from '../../atoms/image/Image';
import { Button } from '../../molecules/button/Button';
import { Logo } from '../../molecules/logo/Logo';
import ToggleBtn from '../../others/ToggleBtn/ToggleBtn';

const SCREEN_Y = window.screenY;

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  position: fixed;
  ${SCREEN_Y > 0 &&
  css`
    background-color: white;
  `}
`;

const LeftHeader = styled.div`
  display: flex;
  width: 180px;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 5px;
`;

const RightHeader = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

export const Header = () => {
  return (
    <Container>
      <LeftHeader>
        <Button>
          <Icon name="menu" size={30} />
        </Button>
        <Logo />
      </LeftHeader>
      <RightHeader>
        <ToggleBtn />
        <Button>
          <Icon name="lightbulb" size={30} />
        </Button>
        <Button>
          <Image src="./assets/img/github-mark.png" />
        </Button>
      </RightHeader>
    </Container>
  );
};
