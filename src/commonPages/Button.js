import React from 'react'

function Button(props) {
    const { isLoading, label, className = "btn btn-success col-md-6", ...restProps } = props

    let buttonSection = null
    if (isLoading) {
        buttonSection = <button type="submit" class={className} {...restProps}>Loading...</button>  
    } else {
        buttonSection = <button type="submit" class={className} {...restProps}>{label}</button>
    }

    return buttonSection
}

export default Button
