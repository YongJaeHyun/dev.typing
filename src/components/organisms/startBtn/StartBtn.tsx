import { Text } from '../../atoms/text/Text';
import { Button } from '../../molecules/button/Button';

export const StartBtn = () => {
  return (
    <Button padding="20px 40px" borderRadius="10px" isGrayBtn={true}>
      <Text value="시작하기" fontSize="20px" />
    </Button>
  );
};
