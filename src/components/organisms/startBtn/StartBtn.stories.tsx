import { Story, Meta } from '@storybook/react';
import { StartBtn } from './StartBtn';

export default {
  title: 'Organisms/StartBtn',
  component: StartBtn,
} as Meta;

const Template: Story = (args) => <StartBtn {...args} />;

export const Default = Template.bind({});
