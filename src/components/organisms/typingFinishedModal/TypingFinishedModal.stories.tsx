import { Story, Meta } from '@storybook/react';
import { TypingFinishedModal, Props } from './TypingFinishedModal';

export default {
  title: 'Oragnisms/TypingFinishedModal',
  component: TypingFinishedModal,
  argTypes: {
    cpmValue: { control: 'number' },
    currentCategoryName: { control: 'text' },
    totalNumOfCurrentCategory: { control: 'number' },
    finishedNumOfCurrentCategory: { control: 'number' },
    totalNumOfAllCategory: { control: 'number' },
    finishedNumOfAllCategory: { control: 'number' },
  },
} as Meta;

const Template: Story<Props> = (args) => <TypingFinishedModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  cpmValue: 570,
  currentCategoryName: 'Network',
  totalNumOfCurrentCategory: 40,
  finishedNumOfCurrentCategory: 4,
  totalNumOfAllCategory: 80,
  finishedNumOfAllCategory: 4,
};
