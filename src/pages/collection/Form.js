import React, { useEffect, useState } from 'react'

import { Header, Sidebar } from '../../commonPages'
import FormComponent from './FormComponent'
import { useFetchAPI } from '../../hooks'
import { postUploadFileAPI, saveTokenAPI } from '../../http/common.http.service'
import * as fixedData from '../../helper/settings'
import { getFullRoute, showToastMessage } from '../../helper/utility'

const {
    nftTokenListRoute
} = fixedData.routeName

function Form(props) {
    const { history, location: { item } = {} } = props
    const [uploadedFile, setUploadedFile] = useState(undefined)
    
    const [
        {
            isLoading: isFileUploadLoading,
            response: { isSuccess: isFileUploadSuccess, data: { path: filePath = "" } = {} } = {}
        },
        getFileUpload
    ] = useFetchAPI()

    const [
        {
            isLoading: isSaveTokenLoading,
            response: { isSuccess: isSaveTokenSuccess, data: saveTokenData }
        },
        postSaveToken
    ] = useFetchAPI()

    useEffect(() => {
        if (isFileUploadLoading === false && isFileUploadSuccess && filePath) {
            setUploadedFile(filePath)
        }
    }, [isFileUploadLoading, isFileUploadSuccess, filePath])

    useEffect(() => {
        if (isSaveTokenLoading === false) {
            if (isSaveTokenSuccess && saveTokenData) {
                // console.log('saveTokenData===========-------------', saveTokenData)
                history.push({ pathname: getFullRoute(nftTokenListRoute) })
            } else {
                showToastMessage('Something went wrong...')
            }
        }
    }, [isSaveTokenLoading, isSaveTokenSuccess, saveTokenData])

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

        console.log('body===============', body)

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
            <FormComponent
                isFileUploadLoading={isFileUploadLoading}
                isLoading={isSaveTokenLoading}
                selectedItem={item}
                uploadedFile={uploadedFile}
                onSelectFile={handleOnSelectFile}
                onClickFormSubmit={handleOnClickSubmit}
            />
        </>
    )
}

export default Form
