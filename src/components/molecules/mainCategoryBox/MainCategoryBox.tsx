import { Text } from '../../atoms/text/Text';
import { Button } from '../button/Button';
import styled from 'styled-components';
import { Icon } from '../../atoms/icon/Icon';
import { CategoryBox } from '../../atoms/categoryBox/CategoryBox';

export interface Props {
  value: string;
}

const TextBox = styled.div``;

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 20%;
  position: relative;
  ${TextBox} {
    position: absolute;
    left: 10px;
  }
  button {
    position: absolute;
    right: 10px;
  }
`;

export const MainCategoryBox = (props: Props) => (
  <Button>
    <CategoryBox
      width="150px"
      height="150px"
      borderRadius="15px"
      src={`${process.env.PUBLIC_URL}/assets/img/network.png`}
    >
      <HeaderBox>
        <TextBox>
          <Text fontSize="15px" value={props.value + '개'} color="black" />
        </TextBox>
        <Button borderRadius="10px">
          <Icon name="play_arrow" size={40} />
        </Button>
      </HeaderBox>
    </CategoryBox>
  </Button>
);
