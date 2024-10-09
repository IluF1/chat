import { CSSProperties } from 'react'
import { SyncLoader } from 'react-spinners'

const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red'
}

export const Spinner = () => (
    <SyncLoader
        color="rgb(69, 65, 110)"
        cssOverride={override}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
)
