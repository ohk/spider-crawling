import * as Icon from '../components/icons'
import React from 'react'

export const MENU = [
    {
        href: '/',
        title: 'Home'
    },
    {
        href: '/#specs',
        title: 'Specs'
    },
    {
        href: '/#pricing',
        title: 'Pricing'
    },
    {
        href: '/#about',
        title: 'About Us'
    }
]

export const ABOUT = [
    {
        name: 'Ömer Hamid Kamışlı',
        description:
            'I am Ömer Hamid Kamışlı. I am a computer engineer. I have been developing and building systems for approximately 5 years. I work at POIKUS Software & Technology.',
        src: 'profile.jpg'
    },
    {
        name: 'Furkan Karaaslan',
        description: 'Hello World',
        src: 'profile.jpg'
    }
]

export const SPECS = [
    {
        title: 'Multiple Search Engine Support',
        description:
            'You can list emails using more than one search engine. Only Google and Yahoo are available for now.',
        icon: <Icon.MultiSe />
    },
    {
        title: 'Multiple Site Language Support',
        description:
            'The language of the browsing site does not matter for Spider Crawling. It ensures trouble-free scans with language support that increases every day.',
        icon: <Icon.MultiLanguage />
    },
    {
        title: 'Unlimited Scraping',
        description:
            'With Spider Crawling, you can scrap as much as you want without any restrictions. It applies to all of our plans and we do not limit in any way.',
        icon: <Icon.Limitless />
    },
    {
        title: 'Location Based Scraping',
        description:
            'If you enter location information for the keyword you want to search for, Spider Crawling will search it for you in that area and list the results.',
        icon: <Icon.Location />
    },
    {
        title: 'Search by List',
        description:
            "It doesn't matter if you want to give Spider Crawling a keyword or a list. It will complete the search for you anyways.",
        icon: <Icon.List />
    },
    {
        title: 'The Fastest Scraping',
        description:
            "Spider Crawling works for the most optimum and fastest solution while crawling. It offers the most optimum solution by taking advantage of your computer's features and internet speed.",
        icon: <Icon.Multicore />
    },
    {
        title: 'Multiplatform',
        description:
            "It doesn't matter which operating system you use for Spider Crawling. It works on all operating systems.",
        icon: <Icon.Platform />
    },
    {
        title: 'Mail Integration',
        description:
            'Spider Crawling supports multiple mail sending systems. After establishing the connection, all email addresses listed here will match with the mail systems. ( GetResponse, MailChimp )',
        icon: <Icon.Email />
    },
    {
        title: 'Export+',
        description: 'With Spider Crawling, you can extract the data you obtain in multiple ways. (JSON, XML, CSV)',
        icon: <Icon.Export />
    }
]

export const PLANS = [
    {
        title: 'Starter',
        price: 34.99,
        subscription: 'Monthly',
        specs: [
            {
                text: 'Unlimited Scraping',
                confirm: true
            },
            { text: 'Location Based Scraping', confirm: true },
            { text: 'Search by List', confirm: true },
            { text: 'Advanced Export Support', confirm: true },
            { text: 'Mail Integration' },
            { text: 'Advanced Export Support' },
            { text: 'Multiple Site Language Support' },
            { text: 'Multiple Search Engine Support' }
        ],
        href: '/little',
        color: '--c-price-little'
    },
    {
        title: 'Pro',
        price: 39.99,
        subscription: 'Monthly',
        specs: [
            {
                text: 'Unlimited Scraping',
                confirm: true
            },
            { text: 'Location Based Scraping', confirm: true },
            { text: 'Search by List', confirm: true },
            { text: 'Advanced Export Support', confirm: true },
            { text: 'Mail Integration', confirm: true },
            { text: 'Advanced Export Support', confirm: true },
            { text: 'Multiple Site Language Support' },
            { text: 'Multiple Search Engine Support' }
        ],
        href: '/little',
        color: '--c-price-middle'
    },
    {
        title: 'Ultimate',
        price: 44.99,
        subscription: 'Monthly',
        specs: [
            {
                text: 'Unlimited Scraping',
                confirm: true
            },
            { text: 'Location Based Scraping', confirm: true },
            { text: 'Search by List', confirm: true },
            { text: 'Advanced Export Support', confirm: true },
            { text: 'Mail Integration', confirm: true },
            { text: 'Advanced Export Support', confirm: true },
            { text: 'Multiple Site Language Support', confirm: true },
            { text: 'Multiple Search Engine Support', confirm: true }
        ],
        href: '/little',
        color: '--c-price-super'
    },
    {
        title: 'Starter',
        price: 349.99,
        subscription: 'Annual',
        specs: [
            {
                text: 'Unlimited Scraping',
                confirm: true
            },
            { text: 'Location Based Scraping', confirm: true },
            { text: 'Search by List', confirm: true },
            { text: 'Advanced Export Support', confirm: true },
            { text: 'Mail Integration' },
            { text: 'Advanced Export Support' },
            { text: 'Multiple Site Language Support' },
            { text: 'Multiple Search Engine Support' }
        ],
        href: '/little',
        color: '--c-price-little'
    },
    {
        title: 'Pro',
        price: 399.99,
        subscription: 'Annual',
        specs: [
            {
                text: 'Unlimited Scraping',
                confirm: true
            },
            { text: 'Location Based Scraping', confirm: true },
            { text: 'Search by List', confirm: true },
            { text: 'Advanced Export Support', confirm: true },
            { text: 'Mail Integration', confirm: true },
            { text: 'Advanced Export Support', confirm: true },
            { text: 'Multiple Site Language Support' },
            { text: 'Multiple Search Engine Support' }
        ],
        href: '/little',
        color: '--c-price-middle'
    },
    {
        title: 'Ultimate',
        price: 449.99,
        subscription: 'Annual',
        specs: [
            {
                text: 'Unlimited Scraping',
                confirm: true
            },
            { text: 'Location Based Scraping', confirm: true },
            { text: 'Search by List', confirm: true },
            { text: 'Advanced Export Support', confirm: true },
            { text: 'Mail Integration', confirm: true },
            { text: 'Advanced Export Support', confirm: true },
            { text: 'Multiple Site Language Support', confirm: true },
            { text: 'Multiple Search Engine Support', confirm: true }
        ],
        href: '/little',
        color: '--c-price-super'
    }
]
