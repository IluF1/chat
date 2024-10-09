import classNames from 'classnames'
import { Eye, EyeClosed } from 'lucide-react'
import { ChangeEventHandler, useState } from 'react'

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
    type = 'text',
    onChange,
    error = false
}: Props) => {
    const [show, setShow] = useState<boolean>(false)
    return (
        <div className={styles.container}>
            <input
                type={show ? 'text' : type}
                className={classNames(
                    error ? styles.error : styles.input,
                    className
                )}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
            {type === 'password' && (
                <button type="button" onClick={() => setShow(!show)} className={styles.showPasswordButton}>
                    {show ? <Eye /> : <EyeClosed />}
                </button>
            )}
        </div>
    )
}
