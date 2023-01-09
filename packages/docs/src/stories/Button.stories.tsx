import type { StoryObj, Meta } from '@storybook/react'
import { Button } from '@matheussl-ignite-ui/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Send',
  },
} as Meta

export const Primary: StoryObj = {}
