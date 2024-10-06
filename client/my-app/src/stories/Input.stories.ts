import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Input } from '@/components/Ui/Input'

const meta = {
    title: 'Example/Input',
    component: Input,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],
    args: { onChange: fn() }
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: 'input'
    }
}
