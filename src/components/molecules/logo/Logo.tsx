import styled from 'styled-components';
import { Text } from '../../atoms/text/Text';

const Div = styled.div`
  width: 300px;
`;

export const Logo = () => {
  return (
    <Div>
      <Text fontSize={30} fontWeight="BOLD" value="dev.typing" />
    </Div>
  );
};
