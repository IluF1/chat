import { CSSProperties } from 'react'
import { ClipLoader } from 'react-spinners'

const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red'
}

export const Spinner = () => (
    <ClipLoader
        color="green"
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
    />
)
