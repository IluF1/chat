import classNames from 'classnames'

import styles from './Text.module.css'

type tag = 'h1' | 'h2' | 'h3' | 'p'

interface Props {
    className?: string
    children: string
    tag?: tag
}

export const Text = ({ className, children, tag = 'p' }: Props) => {
    const Tag = tag

    return <Tag className={classNames(styles[Tag], className)}>{children}</Tag>
}
