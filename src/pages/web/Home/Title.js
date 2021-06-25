import React from 'react'

function Title(props) {
    const { label } = props

    return (
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <div class="section-title">
                    <h4>{label}</h4>
                </div>
            </div>
        </div>
    )
}

export default Title