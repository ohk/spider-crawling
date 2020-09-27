import React from 'react'

import Button from '../components/button'

export default {
    title: 'Buttons'
}

export const Theme = () => (
    <div>
        <Button theme>Theme</Button>
        <Button auth>Auth</Button>
        <Button href="/">Link</Button>
        <Button href="/" selected>
            Link
        </Button>
    </div>
)
