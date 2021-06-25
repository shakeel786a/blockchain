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
            <div class="product__item text-center">
                <div class="product__item__pic set-bg" role="button" onClick={onClickProduct}>
                    <Avatar uri={imageOrVideo} />
                </div>
                <div class="product__item__text">
                    <h4 class="font-weight-bold"><a role="button" class="text-black" onClick={onClickProduct}>{nftName}</a></h4>

                    {/* <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p> */}
                    <p class="text-ellispis"> {shortDescription}</p>
                    <div class="product__price">{startingPrice}</div>
                </div>
                <button type="submit" class="mt-3 site-btn">Buy</button>
            </div>
        </div>
    )
}

export default Product