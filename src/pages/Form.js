import React, { useEffect, useState } from 'react'

import { Header, Sidebar } from '../commonPages'
import FormComponent from './FormComponent'
import { useFetchAPI } from '../hooks'
import { postUploadFileAPI } from '../http/common.http.service'

function Form(props) {
    const { history } = props
    const [uploadedFile, setUploadedFile] = useState(undefined)

    const [
        {
            isLoading,
            response
        },
        getFileUpload
    ] = useFetchAPI()

    useEffect(() => {
        if (isLoading === false && response) {
            setUploadedFile(response.path)
        }
    }, [isLoading, response])

    const uploadFile = file => {
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

    const handleOnSelectFile = file => {
        uploadFile(file)
    }

    const handleOnClickSubmit = formInfo => {}


    return (
        <>
            <Header history={history} />
            <Sidebar />
            <FormComponent isLoading={isLoading} uploadedFile={uploadedFile} onSelectFile={handleOnSelectFile} onClickFormSubmit={handleOnClickSubmit} />
        </>
    )
}

export default Form
