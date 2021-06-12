import React, { useEffect, useState } from 'react'

import Header from '../commonPages/Header'
import Sidebar from '../commonPages/Sidebar'
import { getNftTokenListAPI } from '../http/common.http.service'
import NftTokenListComponent from './NftTokenListComponent'
import { useFetchAPI } from '../hooks'
import { Loader } from '../commonPages'

function NftTokenList(props) {
    const { history } = props

    const [nftTokenList, setNftTokenList] = useState(undefined)

    const [
        {
            isLoading: isNftTokenListLoading,
            response: { isSuccess: isNftTokenListSuccess, data: nftTokenListData }
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

    useEffect(() => {
        if (isNftTokenListLoading === false) {
            if (isNftTokenListSuccess && nftTokenListData) {
                setNftTokenList(nftTokenListData)
            }
        }
    }, [isNftTokenListLoading, isNftTokenListSuccess, nftTokenListData])

    return (
        <body>
            <Loader isLoaderActive={isNftTokenListLoading} />
            <Header history={history} />
            <Sidebar history={history} />
            <NftTokenListComponent list={nftTokenList} />
        </body>
    )
}

export default NftTokenList
