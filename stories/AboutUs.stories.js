import React from 'react'

import AboutUs from '../components/aboutus'
import profile from '../public/profile.jpg'
export default {
    title: 'AboutUs'
}

export const Theme = () => (
    <div>
        <AboutUs name="Ömer Hamid Kamışlı" description="Hello World" src={profile} />
    </div>
)
