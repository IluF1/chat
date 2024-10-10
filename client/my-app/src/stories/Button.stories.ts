import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Button } from '@/components/Ui/Button'

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],
    args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Dark: Story = {
    args: {
        variant: 'dark',
        children: 'Button'
    }
}

export const Default: Story = {
    args: {
        children: 'Button',
        variant: 'default'
    }
}

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Button'
    }
}
