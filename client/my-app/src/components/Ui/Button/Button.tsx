import classNames from 'classnames'

import styles from './Button.module.css'

type buttonTypes = 'submit' | 'button'
type variants = 'default' | 'outline' | 'ghost'

interface Props {
    className?: string
    type?: buttonTypes
    children: string
    variant?: variants
    onClick?: () => void
}

export const Button = ({
    className,
    children,
    type = 'button',
    variant = 'default',
    onClick
}: Props) => {
    return (
        <button
            type={type}
            className={classNames(styles[variant], className)}
            onClick={onClick}
        >
            {children}
        </button>
    )
}
