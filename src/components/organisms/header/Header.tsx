import styled from 'styled-components';
import { Image } from '../../atoms/image/Image';
import { Button } from '../../molecules/button/Button';
import { Logo } from '../../molecules/logo/Logo';
import ToggleBtn from '../../others/ToggleBtn/ToggleBtn';
import { Icon } from '../../atoms/icon/Icon';
import { useRecoilValue } from 'recoil';
import { isDarkState } from '../../../recoil/recoilStates';

const Container = styled.header<{ isDark: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  position: fixed;
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
  const isDark = useRecoilValue(isDarkState);
  return (
    <Container isDark={isDark}>
      <LeftHeader>
        <Button borderRadius="50%">
          <Icon width="25px" height="25px" name="menu" size={30} />
        </Button>
        <Logo />
      </LeftHeader>
      <RightHeader>
        <ToggleBtn />
        <Button borderRadius="50%" onHover={true}>
          <Icon width="25px" height="25px" name="lightbulb" size={30} />
        </Button>
        <Button borderRadius="50%" onHover={true}>
          <Image
            width="25px"
            height="25px"
            src={
              isDark
                ? `${process.env.PUBLIC_URL}/assets/img/github-mark-white.png`
                : `${process.env.PUBLIC_URL}/assets/img/github-mark.png`
            }
          />
        </Button>
      </RightHeader>
    </Container>
  );
};
