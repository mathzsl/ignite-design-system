import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@matheussl-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/matheuslima99.png',
    alt: 'Matheus Lima',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallBack: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
