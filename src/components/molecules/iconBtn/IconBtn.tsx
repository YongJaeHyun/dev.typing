import styled from 'styled-components';
import { Icon } from '../../atoms/icon/Icon';

export interface Props {
  name?: string;
  fill?: number;
  size?: number;
  src?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = styled.button<Props>`
  cursor: pointer;
  font-variation-settings: 'FILL' ${(props) => props.fill ?? 0}, 'wght' 500,
    'GRAD' 0, 'opsz' ${(props) => props.size ?? 20};
  background-color: transparent;
`;

const GithubImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: 'contain';
`;

export const IconBtn = (props: Props) => (
  <Button onClick={props.onClick} fill={props.fill} size={props.size}>
    {props.src !== undefined ? (
      <GithubImg src={props.src} />
    ) : (
      <Icon name={props.name} />
    )}
  </Button>
);
