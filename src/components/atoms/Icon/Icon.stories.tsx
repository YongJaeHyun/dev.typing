import Icon, { Props } from './Icon';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
    color: { control: { type: 'color', presetColors: ['#f5f6fa', '#000'] } },
    name: {
      control: 'text',
      defaultValue: 'menu',
    },
    fill: {
      control: 'inline-radio',
      options: [0, 1],
      defaultValue: 0,
    },
  },
} as Meta;

const testFunc = () => alert('클릭!!');
const Template: Story<Props> = (args) => <Icon {...args} onClick={testFunc} />;

export const Icons = Template.bind({});

export const GithubIcon = () => <Icon src="./assets/img/github-mark.png" />;
