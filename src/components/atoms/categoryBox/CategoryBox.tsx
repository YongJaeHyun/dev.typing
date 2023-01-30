import styled from 'styled-components';

export interface Props {
  width: string;
  height: string;
  src?: string;
  borderRadius?: string;
  children?: React.ReactNode;
}

const Div = styled.div<Props>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: url(${(props) => props.src}) no-repeat center;
  background-size: cover;
  border: 2px solid ${(props) => props.theme.textColor.gray};
  border-radius: ${(props) => props.borderRadius};
`;

export const CategoryBox = (props: Props) => (
  <Div
    src={props.src}
    width={props.width}
    height={props.height}
    borderRadius={props.borderRadius}
  >
    {props.children}
  </Div>
);
