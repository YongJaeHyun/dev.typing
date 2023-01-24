import { Story, Meta } from '@storybook/react';
import ProgressBar, { Props } from './ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBar,
  argTypes: {
    width: { control: 'range', defaultValue: 0, min: 0, max: 100, step: 1 },
  },
} as Meta;

const Template: Story<Props> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
