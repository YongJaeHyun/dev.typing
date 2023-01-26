import { Story, Meta } from '@storybook/react';
import { Text, Props } from './Text';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: ['#f5f6fa', '#212121', '#9E9E9E'],
      },
    },
    fontSize: {
      control: { type: 'range', defaultValue: 16, min: 16, max: 40, step: 1 },
    },
    fontWeight: {
      control: 'select',
      defaultValue: 'NORMAL',
      options: ['LIGHT', 'REGULAR', 'MEDIUM', 'BOLD', 'BOLDEST'],
    },
    fontFamily: {
      control: 'select',
      defaultValue: 'Noto Sans KR',
      options: ['Apple SD Gothic Neo', 'Noto Sans KR', 'sans-serif'],
    },
    value: { control: 'text', defaultValue: 'Test' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Text {...args} />;

export const Default = Template.bind({});
