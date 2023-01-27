import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isDarkState } from '../../../recoil/recoilStates';
import { Icon } from '../../atoms/icon/Icon';

const InnerCircle = styled.div<{ isDark: boolean }>`
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.textColor.themeDefault};
  transform: translate(-50%, -50%);
  left: ${(props) => (props.isDark ? '59px' : '18px')};
  position: absolute;
  transition: all 0.4s ease-in-out;
`;

const OuterCircle = styled.button<{ isDark: boolean }>`
  display: inline-block;
  width: 80px;
  height: 35px;
  border: 2px solid ${(props) => props.theme.textColor.themeDefault};
  border-radius: 20px;
  background-color: ${(props) => props.theme.bgColor.themeDefault};
  position: relative;
  cursor: pointer;
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
