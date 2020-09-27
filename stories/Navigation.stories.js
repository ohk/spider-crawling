import React from 'react'
import Logo from '../components/navigationbar/Logo'
import Menu from '../components/navigationbar/Menu'
import Auth from '../components/navigationbar/Auth'
import NavigationBar from '../components/navigationbar'

export default {
    title: 'Navigation'
}

export const Navigation = () => (
    <div>
        <Logo>Spider Crawling</Logo>
        <Menu items={MenuItems} />
        <Auth auth />
    </div>
)

export const NavigationB = () => <NavigationBar auth />
