import styled from 'styled-components';

export interface Props {
  src: string;
  isDark: boolean;
}

const Img = styled.img<Props>`
  width: 30px;
  height: 30px;
  object-fit: 'contain';
`;

export const Image = (props: Props) => (
  <Img src={props.isDark ? props.src + '-white' : props.src} />
);
