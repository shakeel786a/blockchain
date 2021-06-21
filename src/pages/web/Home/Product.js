import React from 'react'

import { Avatar } from '../../../commonPages'

function Product(props) {
    const { item } = props
    const { nftName, imageOrVideo, shortDescription, startingPrice } = item || {}
    return (
        <div class="col-lg-5 col-md-5 col-sm-6 mx-auto">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="https://static.tildacdn.com/tild3530-3161-4038-a463-346238333435/IMG_2863.JPG">
                    <Avatar uri={imageOrVideo} />
                </div>
                <div class="product__item__text">
                    <h5 class="font-weight-bold"><a href="#" class="text-dark">{nftName}</a></h5>

                    <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                    {/* {shortDescription} */}
                    <div class="product__price">{startingPrice}</div>
                    <button type="submit" class="mt-3 site-btn">Buy</button>
                </div>
            </div>
        </div>
    )
}

export default Product