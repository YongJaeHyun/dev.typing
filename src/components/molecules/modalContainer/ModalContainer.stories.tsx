import { Story, Meta } from '@storybook/react';
import { ModalContainer, Props } from './ModalContainer';

export default {
  title: 'Molecules/ModalContainer',
  component: ModalContainer,
} as Meta;

const Template: Story<Props> = (args) => <ModalContainer {...args} />;

export const Default = Template.bind({});
