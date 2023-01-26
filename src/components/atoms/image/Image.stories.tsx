import { Image, Props } from './Image';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    src: { control: 'text', defaultValue: './assets/img/github-mark.png' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Image {...args} />;

export const Default = Template.bind({});
