import * as React from 'react'

type Props = {
    path?: string
    isActive?: boolean
    onClick?: () => void
    children?: any
}

function Link(props: Props) {
    const { children, isActive, path, onClick } = props

    return (
        <a className={isActive ? 'active' : ''} href={path} onClick={onClick}>
            {children}
        </a>
    )
}

export default Link
