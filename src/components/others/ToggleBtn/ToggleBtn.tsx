import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isDarkState } from '../../../recoil/recoilStates';
import { Icon } from '../../atoms/icon/Icon';

const InnerCircle = styled.div<{ isDark: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.textColor.themeDefault};
  transform: translate(-50%, -50%);
  left: ${(props) => (props.isDark ? '52px' : '15px')};
  position: absolute;
  transition: all 0.4s ease-in-out;
`;

const OuterCircle = styled.button<{ isDark: boolean }>`
  display: inline-block;
  width: 70px;
  height: 30px;
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
      <Icon
        width="25px"
        height="25px"
        isToggleBtn={true}
        name={isDark ? 'dark_mode' : 'light_mode'}
      />
      <InnerCircle isDark={isDark} />
    </OuterCircle>
  );
};

export default ToggleBtn;
