import React, { useEffect } from 'react'

import { Header, Sidebar } from '../commonPages'
import FormComponent from './FormComponent'
import { useFetchAPI } from '../hooks'
import { postUploadFileAPI } from '../http/common.http.service'

function Form(props) {
    const { history } = props

    const [
        {
            isLoading,
            response
        },
        getFileUpload
    ] = useFetchAPI()

    useEffect(() => {
        response && console.log('uploaded file link============', response)
    }, [response])

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

    const handleOnClickSubmit = formInfo => {
        console.log('formInfo===========', formInfo)
        uploadFile(formInfo && formInfo.file)
    }


    return (
        <>
            <Header history={history} />
            <Sidebar />
            <FormComponent isLoading={isLoading} onClickFormSubmit={handleOnClickSubmit} />
        </>
    )
}

export default Form
