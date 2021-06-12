import React from 'react'

function Loader(props) {
    const { isLoaderActive } = props

    if (!isLoaderActive) {
        return null
    }

    return (
        <div id="preloader">
            <div class="sk-three-bounce">
                <div class="sk-child sk-bounce1"></div>
                <div class="sk-child sk-bounce2"></div>
                <div class="sk-child sk-bounce3"></div>
            </div>
        </div>
    )
}

export default Loader