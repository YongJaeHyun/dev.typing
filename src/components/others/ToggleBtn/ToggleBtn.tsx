import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isDarkState } from '../../../recoil/recoilStates';
import { Icon } from '../../atoms/icon/Icon';

const InnerCircle = styled.div<{ isDark: boolean }>`
  width: 26px;
  height: 26px;
  border-radius: 15px;
  background-color: ${(props) =>
    props.isDark
      ? props.theme.textColor.white
      : props.theme.textColor.light_black};
  left: ${(props) => (props.isDark ? '45px' : '5px')};
  position: absolute;
  transition: all 0.4s ease-in-out;
`;

const OuterCircle = styled.button<{ isDark: boolean }>`
  display: flex;
  width: 80px;
  height: 35px;
  border: 2px solid
    ${(props) =>
      props.isDark
        ? props.theme.textColor.white
        : props.theme.textColor.light_black};
  border-radius: 20px;
  align-items: center;
  background-color: ${(props) => props.theme.mainBgColor};
  position: relative;
  cursor: pointer;
  color: ${(props) =>
    props.isDark
      ? props.theme.textColor.white
      : props.theme.textColor.light_black};
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: ${(props) =>
      props.isDark
        ? props.theme.accentColor.purple
        : props.theme.accentColor.yellow};
    span {
      color: ${(props) =>
        props.isDark
          ? props.theme.accentColor.purple
          : props.theme.accentColor.yellow};
    }
    ${InnerCircle} {
      background-color: ${(props) =>
        props.isDark
          ? props.theme.accentColor.purple
          : props.theme.accentColor.yellow};
    }
  }
`;

const ToggleBtn = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkState);
  const toggleTheme = () => setIsDark((prev) => !prev);
  return (
    <OuterCircle isDark={isDark} onClick={toggleTheme}>
      <Icon isDark={isDark} name={isDark ? 'dark_mode' : 'light_mode'} />
      <InnerCircle isDark={isDark} />
    </OuterCircle>
  );
};

export default ToggleBtn;
