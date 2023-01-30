import { Story, Meta } from '@storybook/react';
import { MainCategoryBox, Props } from './MainCategoryBox';

export default {
  title: 'Molecules/MainCategoryBox',
  component: MainCategoryBox,
  argTypes: {
    value: {
      control: 'number',
      defaultValue: 20,
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <MainCategoryBox {...args} />;

export const Default = Template.bind({});
