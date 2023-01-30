import { Icon, Props } from './Icon';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  argTypes: {
    width: { control: 'text', defaultValue: '25px' },
    height: { control: 'text', defaultValue: '25px' },
    color: { control: { type: 'color', presetColors: ['#f5f6fa', '#000'] } },
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

const Template: Story<Props> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
