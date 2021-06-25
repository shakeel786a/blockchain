import React from 'react'
import { useHistory } from 'react-router-dom'

import * as fixedData from '../../../helper/settings'
import { Avatar } from '../../../commonPages'

const {
    web: { webProductDetailRoute }
} = fixedData.routeName

function Product(props) {
    const { item } = props
    const { nftID, nftName, imageOrVideo, shortDescription, startingPrice } = item || {}

    const history = useHistory()

    const onClickProduct = () => history.push({ pathname: `${webProductDetailRoute.path}/${nftID}` })

    return (
        <div class="col-lg-5 col-md-5 col-sm-6 mx-auto">
            <div class="product__item">
                <div class="product__item__pic set-bg" role="button" onClick={onClickProduct}>
                    <Avatar uri={imageOrVideo} />
                </div>
                <div class="product__item__text">
                    <h5 class="font-weight-bold"><a role="button" class="text-dark" onClick={onClickProduct}>{nftName}</a></h5>

                    {/* <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p> */}
                    {shortDescription}
                    <div class="product__price">{startingPrice}</div>
                    <button type="submit" class="mt-3 site-btn">Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Product