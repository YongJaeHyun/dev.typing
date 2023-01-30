import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { isDarkState } from '../../../recoil/recoilStates';

export interface Props {
  width: string;
  height: string;
  src: string;
}

const Img = styled.img<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const Image = (props: Props) => {
  const isDark = useRecoilValue(isDarkState);
  return (
    <Img
      width={props.width}
      height={props.height}
      src={isDark ? props.src + '.png' : props.src + '-white.png'}
    />
  );
};
