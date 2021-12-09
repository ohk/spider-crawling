import React from 'react'

import Layout from '../components/Layout'
import Welcome from '../components/Welcome'
import Specs from '../components/Specs'
import Prices from '../components/Prices'
import Abouts from '../components/AboutUs'
import Title from '../components/Title'

import { SPECS, ABOUT, PLANS } from '../CONST'

export default function Home() {
    return (
        <Layout>
            <Welcome
                little="Flexible & Manageable"
                title="Easiest & Powerful \n Digital Solution"
                description="The most effective mail collection tool ever produced. \n With Spider Crawling, you can collect emails just by giving keywords."
            />
            <Title>Specs</Title>
            <Specs specs={SPECS} id="specs" name="specs" />
            <Title>Pricing</Title>
            <Prices plans={PLANS} id="pricing" name="pricing" />
        </Layout>
    )
}
