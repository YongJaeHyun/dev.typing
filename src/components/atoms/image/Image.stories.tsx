import { Image, Props } from './Image';
import { Story, Meta } from '@storybook/react';

export default {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    width: { control: 'text', defaultValue: '25px' },
    height: { control: 'text', defaultValue: '25px' },
    src: { control: 'text', defaultValue: './assets/img/github-mark' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Image {...args} />;

export const Default = Template.bind({});
