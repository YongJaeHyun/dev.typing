import { Text } from '../../atoms/text/Text';
import { Button } from '../../molecules/button/Button';

export const StartBtn = () => {
  return (
    <Button padding="20px 40px" borderRadius="10px" isGrayBtn={true}>
      <Text value="μμνκΈ°" fontSize="20px" />
    </Button>
  );
};
