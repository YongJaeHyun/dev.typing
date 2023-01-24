import styled from 'styled-components';

export interface Props {
  width: number;
}

const Div = styled.div<Props>`
  width: ${(props) => props.width / 3};
  height: 0.7rem;
`;

const OuterSpan = styled.span`
  width: 100%;
  height: 100%;
  background-color: '#e0e0e0';
`;

const InnerSpan = styled.span<Props>`
  width: ${(props) => props.width / 3}%;
  height: 100%;
  background-color: #44bd32;
  transition: all 0.25s ease-in-out;
  border-radius: 10px;
  display: block;
`;

const ProgressBar = (props: Props) => {
  const WIDTH = window.innerWidth;
  return (
    <Div width={WIDTH}>
      <OuterSpan>
        <InnerSpan width={props.width}></InnerSpan>
      </OuterSpan>
    </Div>
  );
};
export default ProgressBar;
