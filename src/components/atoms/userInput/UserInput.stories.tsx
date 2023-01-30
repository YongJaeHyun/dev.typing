import { Story, Meta } from '@storybook/react';
import { UserInput, Props } from './UserInput';

export default {
  title: 'Atoms/UserInput',
  component: UserInput,
  argTypes: {
    opacity: { control: 'inline-radio', defaultValue: 1, options: [0, 1] },
  },
} as Meta;

const Template: Story<Props> = (args) => <UserInput {...args} />;

export const Default = Template.bind({});
