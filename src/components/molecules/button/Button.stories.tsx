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
    width: {
      control: 'range',
      min: 1,
      max: 100,
      step: 1,
      defaultValue: 25,
    },
    height: {
      control: 'range',
      min: 1,
      max: 100,
      step: 1,
      defaultValue: 25,
    },
    src: {
      control: 'text',
      defaultValue: './assets/img/github-mark',
    },
  },
} as Meta;

const testFunc = () => alert('클릭!!');
const Template: Story<Props> = (args) => (
  <Button {...args} onClick={testFunc} />
);

export const IconBtn = Template.bind({});
IconBtn.args = {
  children: <Icon width="25px" height="25px" name="menu" />,
};

export const ImageBtn = Template.bind({});
ImageBtn.args = {
  children: <Image width="25px" height="25px" src="./assets/img/github-mark" />,
};
