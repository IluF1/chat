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
}

export const Input = ({
    className,
    placeholder,
    value,
    type,
    onChange
}: Props) => {
    return (
        <input
            type={type}
            className={classNames(styles.input, className)}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}
