import styled from 'styled-components';
import { Text } from '../../atoms/text/Text';

const Div = styled.div``;

export const Logo = () => {
  return (
    <Div>
      <Text fontSize={24} fontWeight="BOLD" value="dev.typing" />
    </Div>
  );
};
