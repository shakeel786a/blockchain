import React, { useEffect, useState } from 'react'

import { useFetchAPI } from '../../../hooks'
import { getNftTokenListAllAPI } from '../../../http/common.http.service'
import { Avatar } from '../../../commonPages'
import { FooterAndSearch, Header, Loader, OffCanvasMenu } from '../commonUI'
import Category from './Category'
import ProductSection from './ProductSection'
import DiscountSection from './DiscountSection'
import TrendSection from './TrendSectoin'
import ServiceSection from './ServiceSection'

function Home() {
    const [productList, setProductList] = useState([])
    
    const [
        {
            isLoading: isListLoading,
            response: { isSuccess: isListSuccess, data }
        },
        getList
    ] = useFetchAPI()

    useEffect(() => {
        getList({
            api: getNftTokenListAllAPI,
            payload: {}
        })
    }, [])

    useEffect(() => {
        if (isListLoading === false) {
            if (isListSuccess && data && data.length) {
                setProductList(data)
            }
        }
    }, [isListLoading, isListSuccess, data])

    return (
        <body>
            {/*  Page Preloder  */}
            {isListLoading ? <Loader /> : null}

            {/*  Offcanvas Menu */}
            <OffCanvasMenu />

            {/*  Header Section */}
            {/* <Header /> */}

            {/*  Categories Section  */}
            <Category />

            {/*  Product Section */}
            <ProductSection titleLabel="New Listed" products={productList} />
            {/* <ProductSection titleLabel="Series At Marcel Duchamp" products={["a", "b"]} />
            <ProductSection titleLabel="Series At the Bottom" products={["a", "b"]} /> */}

            {/*  Discount Section */}
            <DiscountSection />

            {/*  Trend Section */}
            <TrendSection />

            {/*  Services Section */}
            <ServiceSection />

            {/*  Footer and Search Section */}
            {/* <FooterAndSearch /> */}
        </body>
    )
}

export default Home