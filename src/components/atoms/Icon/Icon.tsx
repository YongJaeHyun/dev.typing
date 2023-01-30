import styled, { css } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isDarkState } from '../../../recoil/recoilStates';

export interface Props {
  name: string;
  width?: string;
  height?: string;
  isToggleBtn?: boolean;
  isDark?: boolean;
  color?: string;
  fill?: number;
  size?: number;
}

const Span = styled.span<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-variation-settings: 'FILL' ${(props) => props.fill ?? 0}, 'wght' 500,
    'GRAD' 0, 'opsz' ${(props) => props.size ?? 20};
  color: ${(props) => props.color ?? props.theme.textColor.themeDefault};
  ${(props) =>
    props.isToggleBtn === true &&
    css`
      transform: translate(-50%, -50%);
      left: ${props.isDark === true ? '17px' : '52px'};
      position: absolute;
      transition: all 0.4s ease-in-out;
    `}
`;

export const Icon = (props: Props) => {
  const isDark = useRecoilValue(isDarkState);
  return (
    <Span
      className="material-symbols-rounded"
      color={props.color}
      fill={props.fill}
      size={props.size}
      isToggleBtn={props.isToggleBtn}
      isDark={isDark}
      width={props.width}
      height={props.height}
      name={props.name}
    >
      {props.name}
    </Span>
  );
};
