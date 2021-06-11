import React, { useEffect, useState } from 'react'

import { Header, Sidebar } from '../commonPages'
import FormComponent from './FormComponent'
import { useFetchAPI } from '../hooks'
import { postUploadFileAPI, saveTokenAPI } from '../http/common.http.service'
import * as fixedData from '../helper/settings'
import { getFullRoute } from '../helper/utility'

const {
    nftTokenListRoute
} = fixedData.routeName

function Form(props) {
    const { history } = props
    const [uploadedFile, setUploadedFile] = useState(undefined)

    const [
        {
            isLoading: isFileUploadLoading,
            response: { path: filePath = "" } = {}
        },
        getFileUpload
    ] = useFetchAPI()

    const [
        {
            isLoading: isSaveTokenLoading,
            response: saveTokenData
        },
        postSaveToken
    ] = useFetchAPI()

    useEffect(() => {
        if (isFileUploadLoading === false && filePath) {
            setUploadedFile(filePath)
        }
    }, [isFileUploadLoading, filePath])

    useEffect(() => {
        if (isSaveTokenLoading === false && saveTokenData) {
            // console.log('saveTokenData===========-------------', saveTokenData)
            history.push({ pathname: getFullRoute(nftTokenListRoute) })
        }
    }, [isSaveTokenLoading, saveTokenData])

    const handleOnSelectFile = file => {
        getFileUpload({
            api: postUploadFileAPI,
            payload: {
                token: '4db92ea0235af55e10a5501e9c9fa858',
                APPKEY: 'money_pot_app_125',
                body: {
                    file
                }
            }
        })
    }

    const handleOnClickSubmit = formInfo => {
        const properties = formInfo.properties && JSON.stringify(formInfo.properties)
        const body = { ...formInfo, properties }

        postSaveToken({
            api: saveTokenAPI,
            payload: {
               body
            }
        })
    }

    return (
        <>
            <Header history={history} />
            <Sidebar history={history} />
            <FormComponent isFileUploadLoading={isFileUploadLoading} isLoading={isSaveTokenLoading} uploadedFile={uploadedFile} onSelectFile={handleOnSelectFile} onClickFormSubmit={handleOnClickSubmit} />
        </>
    )
}

export default Form
