import styled from 'styled-components';

export interface Props {
  src: string;
}

const Img = styled.img<Props>`
  width: 100%;
  height: 100%;
  object-fit: 'contain';
`;

export const Image = (props: Props) => <Img src={props.src} />;
