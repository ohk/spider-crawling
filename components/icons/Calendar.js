import * as React from 'react'

function SvgCalendar(props) {
    return (
        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
            <path
                d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"
                fill="currentColor"
            />
        </svg>
    )
}

export default SvgCalendar
