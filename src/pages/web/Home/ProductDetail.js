import React, { useEffect, useState } from 'react'

import { useFetchAPI } from '../../../hooks'
import { getNftDetailsAPI } from '../../../http/common.http.service'
import { Avatar, HTMLParser } from '../../../commonPages'
import Login from '../Auth/Login'
import Register from '../Auth/Register'
import { Loader } from '../commonUI'
import BidForm from './BidForm'

function ProductDetail(props) {
    const { match: { params: { nftId } } = {} } = props
    const [nftDetail, setNftDetail] = useState(undefined)
    // const [isVisibleLogin, setIsVisibleLogin] = useState(false)
    const [isVisibleInfo, setIsVisibleInfo] = useState({ isLoginVisible: false, isRegisterVisible: false })

    const [
        {
            isLoading: isNftDetailLoading,
            response: { isSuccess: isNftDetailSuccess, data: detailData }
        }, 
        getNftDetail
    ] = useFetchAPI()

    useEffect(() => {
        if (nftId) {
            getNftDetail({
                api: getNftDetailsAPI,
                payload: {
                    params: { nftId }
                }
            })
        }
    }, [nftId])

    useEffect(() => {
        if (isNftDetailLoading === false) {
            if (isNftDetailSuccess && detailData) {
                setNftDetail(detailData)
            } else {
                setNftDetail(undefined)
            }
        }
    }, [isNftDetailLoading, isNftDetailSuccess, detailData])

    const handleBidFormSuccess = price => setNftDetail({ ...nftDetail, lastBidPrice: price })
    
    const onClickClose = () => setIsVisibleInfo({ isLoginVisible: false, isRegisterVisible: false })
    const onClickLogin = () => setIsVisibleInfo({ isLoginVisible: true, isRegisterVisible: false })
    const onClickRegister = () => setIsVisibleInfo({ isLoginVisible: false, isRegisterVisible: true })

    const propertiesSection = properties => {
        const filteredProperties = properties && properties.length && properties.filter(item => (item.Key !== "" && item.Value !== ""))
        let data = null
        if (filteredProperties && filteredProperties.length) {
            data = filteredProperties.map(item => {
                return (
                    <div class="col col-md-4 col-lg-4 mb-3">
                        <div class=" bg-lighten p-3 border border-info rounded text-center">
                            <div class="small font-weight-bold">
                                {item.Key}
                            </div>
                            <p class="mb-0 small">{item.Value}</p>
                        </div>
                    </div>
                )
            })
        }
        return data
    }

    let detailSection = null
    if (nftDetail) {
        // console.log('nftDetail================', nftDetail)
        const { imageOrVideo, nftName, description, properties, transactionHash, nftID, lastBidPrice } = nftDetail
        detailSection = (
            <section class="product-details spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="product__details__pic mb-4 main_box">
                                <Avatar uri={imageOrVideo} />
                            </div>

                            <div class="categories__accordion">
                                <div class="accordion" id="accordionExample">
                                    <div class="card">
                                        <div class="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFour">Description</a>
                                        </div>
                                        <div id="collapseFour" class="collapse" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <div class="bg-light p-4 panel_container">
                                                    <HTMLParser htmlContent={description} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseSix">Properties</a>
                                        </div>
                                        <div id="collapseSix" class="collapse" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <div class="bg-light p-4">
                                                    <div class="row">
                                                        {propertiesSection(JSON.parse(properties))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="card">
                                        <div class="card-heading">
                                            <a data-toggle="collapse" data-target="#collapseFive">Details</a>
                                        </div>
                                        <div id="collapseFive" class="collapse" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <div class="bg-light p-4">
                                                    <div class="ChainInfo--label">
                                                        <div class="ChainInfo--label-type">Contract Address</div>
                                                        <div class="ChainInfo--label-value"><a class="text-primary"
                                                                href="https://etherscan.io/address/0x495f947276749ce646f68ac8c248420045cb7b5e"
                                                                rel="" target="_blank">{transactionHash}</a></div>
                                                    </div>
                                                    <div class="ChainInfo--label">
                                                        <div class="ChainInfo--label-type">Token ID</div>
                                                        <div class="ChainInfo--label-value"><button class="token_id"
                                                                type="button">{nftID}</button></div>
                                                    </div>
                                                    <div class="ChainInfo--label">
                                                        <div class="ChainInfo--label-type">Blockchain</div>
                                                        <div class="ChainInfo--label-value">Ethereum</div>
                                                    </div>
                                                    <div class="ChainInfo--label">
                                                        <div class="ChainInfo--label-type">Metadata</div>
                                                        <div class="ChainInfo--label-value">Centralized</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product__details__text">
                                <h3>{nftName}</h3>
                                <div class="product__details__button">
                                    <ul>
                                        <li><a class="mr-2" href="#"><span class="icon_heart_alt"></span></a>14</li>
                                    </ul>
                                </div>

                                <div class="product__details__price mb-2">
                                    <li>
                                        <Avatar uri="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" className="eth_big img-fluid" />
                                        {lastBidPrice}
                                    </li>
                                </div>
                                <BidForm detailInfo={nftDetail} bidFormSuccess={handleBidFormSuccess} onRequestLogin={onClickLogin} />
                                <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
                                    magni lores eos qui ratione voluptatem sequi nesciunt.</p>

                                <div class="product__details__widget">

                                    <div class="categories__accordion">
                                        <div class="accordion" id="accordionExample">
                                            <div class="card">
                                                <div class="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseOne">Price History</a>
                                                </div>
                                                <div id="collapseOne" class="collapse" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <div class="bg-light p-4">
                                                            <div class="d-flex">

                                                                <div class="PriceHistoryStats--stat">
                                                                    <div>All Time Avg. Price</div>
                                                                    <div class="product__details__price mb-0">Ξ11.692</div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <svg class="recharts-surface" width="100%" height="130"
                                                                    viewBox="0 0 668 130" version="1.1">
                                                                    <defs>
                                                                        <clipPath id="recharts3-clip">
                                                                            <rect x="53" y="5" height="95" width="600"></rect>
                                                                        </clipPath>
                                                                    </defs>
                                                                    <g class="recharts-cartesian-grid">
                                                                        <g class="recharts-cartesian-grid-horizontal">
                                                                            <line stroke="#E5E8EB" fill="none" x="53" y="5"
                                                                                width="600" height="95" x1="53" y1="100"
                                                                                x2="653" y2="100"></line>
                                                                            <line stroke="#E5E8EB" fill="none" x="53" y="5"
                                                                                width="600" height="95" x1="53"
                                                                                y1="71.66666666666667" x2="653"
                                                                                y2="71.66666666666667"></line>
                                                                            <line stroke="#E5E8EB" fill="none" x="53" y="5"
                                                                                width="600" height="95" x1="53"
                                                                                y1="43.333333333333336" x2="653"
                                                                                y2="43.333333333333336"></line>
                                                                            <line stroke="#E5E8EB" fill="none" x="53" y="5"
                                                                                width="600" height="95" x1="53" y1="15" x2="653"
                                                                                y2="15"></line>
                                                                            <line stroke="#E5E8EB" fill="none" x="53" y="5"
                                                                                width="600" height="95" x1="53" y1="5" x2="653"
                                                                                y2="5"></line>
                                                                        </g>
                                                                    </g>
                                                                    <g
                                                                        class="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                                                                        <line class="recharts-cartesian-axis-line"
                                                                            stroke="#E5E8EB" width="600" height="30" x="53"
                                                                            y="100" fill="none" x1="53" y1="100" x2="653"
                                                                            y2="100"></line>
                                                                        <g class="recharts-cartesian-axis-ticks">
                                                                            <g
                                                                                class="recharts-layer recharts-cartesian-axis-tick">
                                                                                <line class="recharts-cartesian-axis-tick-line"
                                                                                    stroke="#E5E8EB" width="600" height="30"
                                                                                    x="53" y="100" fill="none" x1="353" y1="110"
                                                                                    x2="353" y2="100"></line><text stroke="none"
                                                                                    width="600" height="30" x="353" y="116"
                                                                                    fill="#353840" fill-opacity="0.6"
                                                                                    class="recharts-text recharts-cartesian-axis-tick-value"
                                                                                    text-anchor="middle">
                                                                                    <tspan x="353" dy="0.71em">6/20</tspan>
                                                                                </text>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                    <g
                                                                        class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                                                                        <line class="recharts-cartesian-axis-line"
                                                                            stroke="#E5E8EB" width="53" height="95" x="0" y="5"
                                                                            fill="none" x1="53" y1="5" x2="53" y2="100"></line>
                                                                        <g class="recharts-cartesian-axis-ticks">
                                                                            <g
                                                                                class="recharts-layer recharts-cartesian-axis-tick">
                                                                                <line class="recharts-cartesian-axis-tick-line"
                                                                                    stroke="#E5E8EB" width="53" height="95"
                                                                                    x="0" y="5" fill="none" x1="43" y1="100"
                                                                                    x2="53" y2="100"></line><text stroke="none"
                                                                                    width="53" height="95" x="25" y="100"
                                                                                    fill="#353840" fill-opacity="0.6"
                                                                                    class="recharts-text recharts-cartesian-axis-tick-value"
                                                                                    text-anchor="end">
                                                                                    <tspan x="25" dy="0.355em">0</tspan>
                                                                                </text>
                                                                            </g>
                                                                            <g
                                                                                class="recharts-layer recharts-cartesian-axis-tick">
                                                                                <line class="recharts-cartesian-axis-tick-line"
                                                                                    stroke="#E5E8EB" width="53" height="95"
                                                                                    x="0" y="5" fill="none" x1="43"
                                                                                    y1="71.66666666666667" x2="53"
                                                                                    y2="71.66666666666667"></line><text
                                                                                    stroke="none" width="53" height="95" x="25"
                                                                                    y="71.66666666666667" fill="#353840"
                                                                                    fill-opacity="0.6"
                                                                                    class="recharts-text recharts-cartesian-axis-tick-value"
                                                                                    text-anchor="end">
                                                                                    <tspan x="25" dy="0.355em">10</tspan>
                                                                                </text>
                                                                            </g>
                                                                            <g
                                                                                class="recharts-layer recharts-cartesian-axis-tick">
                                                                                <line class="recharts-cartesian-axis-tick-line"
                                                                                    stroke="#E5E8EB" width="53" height="95"
                                                                                    x="0" y="5" fill="none" x1="43"
                                                                                    y1="43.333333333333336" x2="53"
                                                                                    y2="43.333333333333336"></line><text
                                                                                    stroke="none" width="53" height="95" x="25"
                                                                                    y="43.333333333333336" fill="#353840"
                                                                                    fill-opacity="0.6"
                                                                                    class="recharts-text recharts-cartesian-axis-tick-value"
                                                                                    text-anchor="end">
                                                                                    <tspan x="25" dy="0.355em">20</tspan>
                                                                                </text>
                                                                            </g>
                                                                            <g
                                                                                class="recharts-layer recharts-cartesian-axis-tick">
                                                                                <line class="recharts-cartesian-axis-tick-line"
                                                                                    stroke="#E5E8EB" width="53" height="95"
                                                                                    x="0" y="5" fill="none" x1="43" y1="15"
                                                                                    x2="53" y2="15"></line><text stroke="none"
                                                                                    width="53" height="95" x="25" y="15"
                                                                                    fill="#353840" fill-opacity="0.6"
                                                                                    class="recharts-text recharts-cartesian-axis-tick-value"
                                                                                    text-anchor="end">
                                                                                    <tspan x="25" dy="0.355em">30</tspan>
                                                                                </text>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                    <g
                                                                        class="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                                                                        <g class="recharts-cartesian-axis-ticks"></g>
                                                                    </g>
                                                                    <g class="recharts-layer recharts-bar">
                                                                        <g class="recharts-layer recharts-bar-rectangles">
                                                                            <g class="recharts-layer recharts-bar-rectangle">
                                                                                <path fill="#bfdcf6" width="5"
                                                                                    height="53.58839062500001" x="351"
                                                                                    y="46.41160937499999" radius="0"
                                                                                    class="recharts-rectangle"
                                                                                    d="M 351,46.41160937499999 h 5 v 53.58839062500001 h -5 Z">
                                                                                </path>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                    <g class="recharts-layer recharts-line">
                                                                        <g class="recharts-layer recharts-line-dots">
                                                                            <circle r="3" stroke="#3291E9" stroke-width="3"
                                                                                fill="#fff" width="600" height="95"
                                                                                class="recharts-dot recharts-line-dot" cx="353"
                                                                                cy="66.87263125"></circle>
                                                                        </g>
                                                                    </g>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card">
                                                <div class="card-heading">
                                                    <a data-toggle="collapse" data-target="#collapseThree">Offers</a>
                                                </div>
                                                <div id="collapseThree" class="collapse" data-parent="#accordionExample">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <table class="table">
                                                                <thead>
                                                                    <tr>
                                                                        <th scope="col">Price</th>
                                                                        <th scope="col">USD Price</th>
                                                                        <th scope="col">Expiration</th>
                                                                        <th scope="col">From</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td> 
                                                                            <Avatar uri="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" />
                                                                            <strong>16.69 </strong>ETH
                                                                        </td>
                                                                        <td>$ 35,766.67</td>
                                                                        <td>
                                                                            in 3 Days </td>
                                                                        <td>
                                                                            Cubsfan333
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td> 
                                                                            <Avatar uri="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" />
                                                                            <strong>16.69 </strong>ETH</td>
                                                                        <td>$ 35,766.67</td>
                                                                        <td>
                                                                            in 2 Days
                                                                        </td>
                                                                        <td>
                                                                            Cubsfan333
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                                <tfoot>
                                                                    <tr>
                                                                        <td colspan="4">
                                                                            <button type="button"
                                                                                class="btn btn-outline-danger">Make
                                                                                Offer</button>
                                                                        </td>
                                                                    </tr>
                                                                </tfoot>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <body>
            {/* Pre loader */}
            {isNftDetailLoading ? <Loader /> : null}
            {detailSection}
            {/* Register */}
            <Register isVisible={isVisibleInfo.isRegisterVisible} onClickClose={onClickClose} onClickLogin={onClickLogin} />
            {/* Login */}
            <Login isVisible={isVisibleInfo.isLoginVisible} onClickClose={onClickClose} onClickRegister={onClickRegister} />
        </body>
    )
}

export default ProductDetail