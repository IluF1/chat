import classNames from 'classnames'
import { ChangeEventHandler } from 'react'

import styles from './Input.module.css'

type inputTypes = 'password' | 'email' | 'text'

interface Props {
    className?: string
    placeholder?: string
    value?: string
    type?: inputTypes
    onChange?: ChangeEventHandler<HTMLInputElement>
    error?: boolean
}

export const Input = ({
    className,
    placeholder,
    value,
    type,
    onChange,
    error = false
}: Props) => {
    return (
        <input
            type={type}
            className={classNames(
                error ? styles.error : styles.input,
                className
            )}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}
