import { Story, Meta } from '@storybook/react';
import { CategoryBox, Props } from './CategoryBox';

export default {
  title: 'Atoms/CategoryBox',
  component: CategoryBox,
  argTypes: {
    width: { control: 'text', defaultValue: '100px' },
    height: { control: 'text', defaultValue: '100px' },
    borderRadius: {
      control: 'text',
      defaultValue: '15px',
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <CategoryBox {...args} />;

export const Default = Template.bind({});
