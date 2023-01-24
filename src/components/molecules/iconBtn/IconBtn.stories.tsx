import { Story, Meta } from '@storybook/react';
import { IconBtn, Props } from './IconBtn';

export default {
  title: 'IconBtn',
  component: IconBtn,
  argTypes: {
    fill: {
      control: 'inline-radio',
      options: [0, 1],
      defaultValue: 0,
    },
    size: {
      control: 'select',
      options: [20, 24, 40, 48],
      defaultValue: 20,
    },
    name: {
      control: 'select',
      options: [
        'menu',
        'lightbulb',
        'double_arrow',
        'format_list_bulleted',
        'bookmark',
        'play_arrow',
        'light_mode',
        'dark_mode',
      ],
      defaultValue: 'menu',
    },
  },
} as Meta;

const testFunc = () => alert('클릭!!');
const Template: Story<Props> = (args) => (
  <IconBtn {...args} onClick={testFunc} />
);

export const Default = Template.bind({});

export const GithubIcon = () => (
  <IconBtn src="./assets/img/github-mark.png" onClick={testFunc} />
);
