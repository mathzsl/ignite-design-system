import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Button,
  Text,
  Tooltip,
  TooltipProps,
} from '@matheussl-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Hover me</Button>,
    content: <Text>This is a Tooltip</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          css={{
            padding: '$12',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
