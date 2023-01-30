import styled from 'styled-components';
import { WINDOW_WIDTH } from '../../../utils';

export interface Props {
  widthPercent: number;
}

const Div = styled.div`
  width: ${WINDOW_WIDTH / 3};
  height: 0.7rem;
`;

const OuterSpan = styled.span`
  width: 100%;
  height: 100%;
  background-color: '#e0e0e0';
`;

const InnerSpan = styled.span<Props>`
  width: ${(props) => props.widthPercent / 3}%;
  height: 100%;
  background-color: #44bd32;
  transition: all 0.25s ease-in-out;
  border-radius: 10px;
  display: block;
`;

export const ProgressBar = (props: Props) => {
  return (
    <Div>
      <OuterSpan>
        <InnerSpan widthPercent={props.widthPercent}></InnerSpan>
      </OuterSpan>
    </Div>
  );
};
