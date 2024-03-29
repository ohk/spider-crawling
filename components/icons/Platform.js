import * as React from 'react'

function SvgPlatform(props) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
                fill="currentColor"
            />
        </svg>
    )
}

export default SvgPlatform
