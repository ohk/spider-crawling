import React from 'react'
import PriceTable from '../components/priceTable'
import Prices from '../components/prices'
export default {
    title: 'Price Table'
}

export const PriceTableOnly = () => (
    <div>
        <PriceTable
            item={{
                title: 'Hello World',
                price: 34.99,
                subscription: 'Monthly',
                specs: [{ text: 'a', confirm }, { text: 'c', confirm }, { text: 'e' }, { text: 'd' }],
                href: '/little'
            }}
            color="--c-price-little"
        />
    </div>
)

export const Price = () => (
    <div>
        <Prices itemList={itemList} />
    </div>
)
