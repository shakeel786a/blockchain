import React from 'react'
import { POST } from '../http/api.http.service'

function Button(props) {
    const { isLoading, isDisable, label, className = "btn btn-success col-md-6", ...restProps } = props


    if (isDisable) {
        return <button type="submit" class={className} disabled {...restProps}>{label}</button>
    }

    let buttonSection = null
    if (isLoading) {
        buttonSection = <button type="submit" class={className} disabled>Loading...</button>  
    } else {
        buttonSection = <button type="submit" class={className} {...restProps}>{label}</button>
    }

    return buttonSection
}

export default Button
