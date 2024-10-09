import type { Meta, StoryObj } from '@storybook/react'

import { Spinner } from '@/components/Ui/Spinner'

const meta = {
    title: 'Example/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered'
    },

    tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
    }
}
