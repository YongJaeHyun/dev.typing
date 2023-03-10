import { Story, Meta } from '@storybook/react';
import ToggleBtn from './ToggleBtn';

export default {
  title: 'Others/ToggleBtn',
  component: ToggleBtn,
} as Meta;

const Template: Story = () => <ToggleBtn />;

export const Default = Template.bind({});
