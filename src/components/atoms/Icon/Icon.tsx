import styled from 'styled-components';

export interface Props {
  color?: string;
  fill?: number;
  name?: string;
  src?: string;
  onClick?: React.MouseEventHandler<HTMLFormElement>;
}

const Form = styled.form<Props>`
  color: ${(props) => props.color ?? props.theme.textColor};
  cursor: pointer;
  font-variation-settings: 'FILL' ${(props) => props.fill ?? 0}, 'wght' 500,
    'GRAD' 0, 'opsz' 48;
`;

const Icon = (props: Props) => (
  <Form
    className="material-symbols-rounded"
    color={props.color}
    fill={props.fill}
    onClick={props.onClick}
  >
    {props.name ?? <img src={props.src} style={{ objectFit: 'contain' }} />}
  </Form>
);

export default Icon;
