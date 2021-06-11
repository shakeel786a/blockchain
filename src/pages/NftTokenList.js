import React, { useEffect, useState } from 'react'

import Header from '../commonPages/Header'
import Sidebar from '../commonPages/Sidebar'
import NftTokenListComponent from './NftTokenListComponent'
import { useFetchAPI } from '../hooks'
import { getNftTokenListAPI } from '../http/common.http.service'

function NftTokenList(props) {
    const { history } = props

    const [
        {
            isLoading: isNftTokenListLoading,
            response: NftTokenList
        },
        getNftTokenList
    ] = useFetchAPI()

    useEffect(() => {
        getNftTokenList({
            api: getNftTokenListAPI,
            payload: {
                params: {}
            }
        })
    }, [])

    console.log('NftTokenList================', NftTokenList)

    return (
        <>
            <Header history={history} />
            <Sidebar history={history} />
            <NftTokenListComponent />
        </>
    )
}

export default NftTokenList
