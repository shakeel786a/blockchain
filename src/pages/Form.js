import React from 'react'

import { Header, Sidebar } from '../commonPages'
import FormComponent from './FormComponent'

function Form() {
    const handleOnClickSubmit = () => {}
    return (
        <>
            <Header />
            <Sidebar />
            <FormComponent onClickSubmit={handleOnClickSubmit} />
        </>
    )
}

export default Form
