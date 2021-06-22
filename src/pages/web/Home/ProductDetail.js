import React from 'react'

import { Avatar } from '../../../commonPages'

function ProductDetail(props) {
    return (
        <body>
            <section class="product-details spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="product__details__pic mb-4 main_box">
                                {/* <img data-hash="product-1" class="product__big__img"
                                    src="https://lh3.googleusercontent.com/PWGK749fD_gpam9saNxNzYgrJI6KIxjsmJ6Qke6LKo2EnQrlbre0T9-9eLDj7mf4ZmJ6FKJaWtHeqKc68PI56FaZP1QeVkwe-fWBTA=w600"
                                    alt="" /> */}
                                <Avatar uri="https://lh3.googleusercontent.com/PWGK749fD_gpam9saNxNzYgrJI6KIxjsmJ6Qke6LKo2EnQrlbre0T9-9eLDj7mf4ZmJ6FKJaWtHeqKc68PI56FaZP1QeVkwe-fWBTA=w600" />
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
                                                    <div class="d-flex align-items-center mb-3">
                                                        <div class="icon_size">
                                                            {/* <img class="Image--image"
                                                                src="https://storage.googleapis.com/opensea-static/opensea-profile/12.png"
                                                                // style="object-fit: cover;"
                                                                 /> */}
                                                            <Avatar uri="https://storage.googleapis.com/opensea-static/opensea-profile/12.png" />
                                                        </div>
                                                        Created By
                                                        <a href="" class="ml-2" target="_blank"><span>F3B901</span></a>
                                                    </div>
                                                    <p>This Stella Artois NFT art piece is inspired by Stella Artois' timeless
                                                        brand. It also marks Stella Artois' first steps into the Metaverse with
                                                        ZED RUN.</p>
                                                    <p>This beautiful art piece comes with a Z2 Nakamoto Genesis racehorse as
                                                        well as a Limited Edition Series One Stella Artois racehorse skin. The
                                                        Z2 Nakamoto is one of the purest thoroughbreds to exist on ZED RUN.
                                                        These racehorses are natural-born champions of the racetrack.</p>
                                                    <p>Stella Artois and ZED RUN have come together to bring Stella Artois into
                                                        the Metaverse. These NFT pieces commemorate these first steps as well as
                                                        celebrating the best part of the UK's horse racing season.</p>
                                                    <p>Must be holding this NFT at a future date to receive their NFT racehorse
                                                        and skin.</p>
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
                                                        <div class="col col-md-4 col-lg-4 mb-3">
                                                            <div class=" bg-lighten p-3 border border-info rounded text-center">
                                                                <div class="small">
                                                                    <a href="" class="text-primary"
                                                                        target="_blank"><span>F3B901</span></a>
                                                                </div>
                                                                <div class="small font-weight-bold">
                                                                    Sawta Akhade
                                                                </div>
                                                                <p class="mb-0 small">80% have this trait.</p>
                                                            </div>
                                                        </div>
                                                        <div class="col col-md-4 col-lg-4 mb-3">
                                                            <div class=" bg-lighten p-3 border border-info rounded text-center">
                                                                <div class="small">
                                                                    <a href="" class="text-primary"
                                                                        target="_blank"><span>F3B901</span></a>
                                                                </div>
                                                                <div class="small font-weight-bold">
                                                                    Sawta Akhade
                                                                </div>
                                                                <p class="mb-0 small">80% have this trait.</p>
                                                            </div>
                                                        </div>
                                                        <div class="col col-md-4 col-lg-4 mb-3">
                                                            <div class=" bg-lighten p-3 border border-info rounded text-center">
                                                                <div class="small">
                                                                    <a href="" class="text-primary"
                                                                        target="_blank"><span>F3B901</span></a>
                                                                </div>
                                                                <div class="small font-weight-bold">
                                                                    Sawta Akhade
                                                                </div>
                                                                <p class="mb-0 small">80% have this trait.</p>
                                                            </div>
                                                        </div>
                                                        <div class="col col-md-4 col-lg-4 mb-3">
                                                            <div class=" bg-lighten p-3 border border-info rounded text-center">
                                                                <div class="small">
                                                                    <a href="" class="text-primary"
                                                                        target="_blank"><span>F3B901</span></a>
                                                                </div>
                                                                <div class="small font-weight-bold">
                                                                    Sawta Akhade
                                                                </div>
                                                                <p class="mb-0 small">80% have this trait.</p>
                                                            </div>
                                                        </div>
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
                                                                rel="" target="_blank">0x495f...7b5e</a></div>
                                                    </div>
                                                    <div class="ChainInfo--label">
                                                        <div class="ChainInfo--label-type">Token ID</div>
                                                        <div class="ChainInfo--label-value"><button class="token_id"
                                                                type="button">1102388963123741...</button></div>
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
                                <h3>Essential structured blazer <span>Brand: SKMEIMore Men Watches from SKMEI</span></h3>
                                {/* <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <span>( 138 reviews )</span>
                                </div> */}

                                <div class="product__details__button">
                                    <ul>
                                        <li><a class="mr-2" href="#"><span class="icon_heart_alt"></span></a>14</li>
                                    </ul>
                                </div>

                                <div class="product__details__price mb-2">
                                    {/* <img
                                        src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" size="20"
                                        class="eth_big img-fluid" /> */}
                                    <li>
                                        <Avatar uri="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg" className="eth_big img-fluid" />
                                        75.0 <span>($ 83.0)</span>
                                    </li>
                                </div>
                                <div class="product__details__button mb-0"><a href="#" class="cart-btn"> Buy Now</a></div>
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
                                                                            {/* <img
                                                                                src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                                                                                size="16" class="eth_small img-fluid" /> */}
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
                                                                            {/* <img
                                                                                src="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
                                                                                size="16" class="eth_small img-fluid" /> */}
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
                        {/* <div class="col-lg-12">
                            <div class="product__details__tab">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Specification</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Reviews ( 2 )</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active" id="tabs-1" role="tabpanel">
                                        <h6>Description</h6>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                            Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                            consequat massa quis enim.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                            quis, sem.</p>
                                    </div>
                                    <div class="tab-pane" id="tabs-2" role="tabpanel">
                                        <h6>Specification</h6>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                            Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                            consequat massa quis enim.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                            quis, sem.</p>
                                    </div>
                                    <div class="tab-pane" id="tabs-3" role="tabpanel">
                                        <h6>Reviews ( 2 )</h6>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                            Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                            consequat massa quis enim.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                            quis, sem.</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="related__title">
                                <h5>RELATED PRODUCTS</h5>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="img/product/related/rp-1.jpg">
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Buttons tweed blazer</a></h6>
                                    <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="img/product/related/rp-2.jpg">
                                
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Flowy striped skirt</a></h6>
                                    <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="product__price">$ 49.0</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="img/product/related/rp-3.jpg">
                                
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Cotton T-Shirt</a></h6>
                                    <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="img/product/related/rp-4.jpg">
                                    <ul class="product__hover">
                                        <li><a href="img/product/related/rp-4.jpg" class="image-popup"><span
                                                    class="arrow_expand"></span></a></li>
                                        <li><a href="#"><span class="icon_heart_alt"></span></a></li>
                                        <li><a href="#"><span class="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">Slim striped pocket shirt</a></h6>
                                    <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="product__price">$ 59.0</div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </body>
    )
}

export default ProductDetail