import type { Meta, StoryObj } from '@storybook/react'

import { Text } from '@/components/Ui/Text'

const meta = {
    title: 'Example/Text',
    component: Text,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const H1: Story = {
    args: {
        tag: 'h1',
        children: 'h1'
    }
}

export const H2: Story = {
    args: {
        children: 'h2',
        tag: 'h2'
    }
}

export const H3: Story = {
    args: {
        tag: 'h3',
        children: 'h3'
    }
}
export const P: Story = {
    args: {
        tag: 'p',
        children: 'p'
    }
}
