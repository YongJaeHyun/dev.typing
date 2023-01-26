import { Story, Meta } from '@storybook/react';
import { Icon } from '../../atoms/icon/Icon';
import { Image } from '../../atoms/image/Image';
import { Button, Props } from './Button';

export default {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {
    fill: {
      control: 'inline-radio',
      options: [0, 1],
    },
    size: {
      control: 'select',
      options: [20, 24, 40, 48],
    },
  },
} as Meta;

const testFunc = () => alert('클릭!!');
const Template: Story<Props> = (args) => (
  <Button {...args} onClick={testFunc} />
);

export const ImageBtn = Template.bind({});
ImageBtn.args = {
  children: <Icon name="menu" />,
};

export const IconBtn = Template.bind({});
IconBtn.args = {
  children: <Image src="./assets/img/github-mark.png" />,
};
