import classNames from 'classnames'
import { memo } from 'react'

import styles from './Button.module.css'

type buttonTypes = 'submit' | 'button'
type variants = 'default' | 'dark' | 'ghost'

interface Props {
    className?: string
    type?: buttonTypes
    children: string
    variant?: variants
    onClick?: () => void
    block?: boolean
}

export const Button = memo(
    ({
        className,
        children,
        type = 'button',
        variant = 'default',
        onClick,
        block
    }: Props) => {
        return (
            <button
                type={type}
                className={classNames(styles[variant], className)}
                onClick={onClick}
                disabled={block}
            >
                {children}
            </button>
        )
    }
)
