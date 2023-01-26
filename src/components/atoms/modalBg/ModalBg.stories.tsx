import { Story, Meta } from '@storybook/react';
import { ModalBg, Props } from './ModalBg';

export default {
  title: 'Atoms/ModalBg',
  component: ModalBg,
} as Meta;

const Template: Story<Props> = (args) => <ModalBg {...args} />;

export const Default = Template.bind({});
