import { Story, Meta } from '@storybook/react';
import { Logo } from './Logo';

export default {
  title: 'Molecules/Logo',
  component: Logo,
} as Meta;

const Template: Story = (args) => <Logo {...args} />;

export const Default = Template.bind({});
