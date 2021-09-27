import * as React from 'react'
import Topbar from '../topbar'

type Props = {
    children?: React.ReactNode
}

function App(props: Props) {
    const { children } = props
    return (
        <>
            <Topbar />
            {children}
        </>
    )
}

export default App
