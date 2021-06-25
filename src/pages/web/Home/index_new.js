import React from 'react'

import { Avatar } from '../../../commonPages'

function Home() {
    return (

        <body>
            {/* Page Preloder */}
            <div id="preloder">
                <div class="loader"></div>
            </div>

            {/* Offcanvas Menu Begin */}
            <div class="offcanvas-menu-overlay"></div>
            <div class="offcanvas-menu-wrapper">
                <div class="offcanvas__close">+</div>
                <ul class="offcanvas__widget">
                    <li><span class="icon_search search-switch"></span></li>
                    <li><a href="#"><span class="icon_heart_alt"></span>
                        <div class="tip">2</div>
                    </a></li>
                    <li><a href="#"><span class="icon_bag_alt"></span>
                        <div class="tip">2</div>
                    </a></li>
                </ul>
                <div class="offcanvas__logo">
                    <a href="./index.html">
                        <img src="./webAssets/img/logo.png" alt="" />
                        {/*
                <Avatar uri="./webAssets/img/logo.png" /> */}
                    </a>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div class="offcanvas__auth">
                    <a href="#">Register</a>
                </div>
            </div>
            {/* Offcanvas Menu End */}

            {/* Header Section Begin */}
            {/* <header class="header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xl-3 col-lg-2">
                    <div class="header__logo">
                        <a href="./index.html"><img src="webAssets/img/logo.png" alt="" /></a>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-7">
                </div>
                <div class="col-lg-3">
                    <div class="header__right">
                        <div class="header__right__auth">
                            <a href="#">Register</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="canvas__open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header> */}
            {/* Header Section End */}

            {/* Categories Section Begin */}
            <section class="categories">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 p-0">
                            <div class="categories__item categories__large__item justify-content-around set-bg mb-0 vh-100"
                                data-setbg="https://static.tildacdn.com/tild3064-3832-4166-a230-323764346462/IMG_20210519_165615.jpg">
                                <div class="categories__text">
                                    <h1>Exhibition</h1>
                                    <h3 class="text-white">At the bottom</h3>
                                    <button type="submit" class="mt-3 site-btn px-5 py-3">Sign Up</button>
                                </div>
                                <div class="categories__text justify-content-between d-flex">
                                    <div class="">
                                        <div class="d-flex align-items-center mb-4"> <svg class="t828__item_icon" width="50px"
                                            height="50px" fill="none" stroke="#fff" stroke-width="5.79"
                                            stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                            <path class="st0"
                                                d="M83.4 18h8.5v70.3H8.1V18h65.7zM25.7 27.8V8.7M44.3 64.3H25.1M74.3 64.3H55.1M44.3 45.3H25.1M74.3 45.3H55.1M72.4 27.8V8.7">
                                            </path>
                                        </svg>
                                            <div class="text-white font-weight-bolder ml-3">25.05 - 25.06.2021</div>
                                        </div>
                                        <div class="d-flex align-items-center mb-4">
                                            <svg class="t828__item_icon" width="50px" height="50px" fill="none" stroke="#fff"
                                                stroke-width="5.79" stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 100 100">
                                                <path class="st0" d="M49.4 23v33.3L66 48"></path>
                                                <circle class="st0" cx="50" cy="50" r="41"></circle>
                                            </svg>
                                            <div class="text-white font-weight-bolder ml-3">25.05 - 25.06.2021</div>
                                        </div>
                                        <div class="d-flex align-items-center mb-4">
                                            <svg class="t828__item_icon" width="50px" height="50px" fill="none" stroke="#fff"
                                                stroke-width="5.79" stroke-miterlimit="10" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 100 100">
                                                <path class="st0"
                                                    d="M75.1 35.8C75.1 49.6 50 85.7 50 85.7s-25.1-36-25.1-49.9S36.1 10.7 50 10.7s25.1 11.2 25.1 25.1z">
                                                </path>
                                                <circle class="st0" cx="50" cy="35.1" r="9.3"></circle>
                                            </svg>
                                            <div class="text-white font-weight-bolder ml-3">25.05 - 25.06.2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Categories Section End */}

            {/* Exibition Concept */}
            <section class="product">
                <div class="container">
                <div class="row"><div class="col-lg-12 col-md-12"><div class="section-title"><h4>Exhibition concept</h4></div></div></div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="d-flex">
                                <div>
                                    <div class="dd tile_left">
                                        <img class="first_img" src="https://thumb.tildacdn.com/tild6133-6637-4139-b330-613430666566/-/resize/400x500/-/format/webp/IMG_2849.JPG" />
                                    </div>
                                    <div class="dd tile_right">
                                        <img class="first_img mt-md-5 mt-3 w-100" src="https://thumb.tildacdn.com/tild3837-3966-4564-b662-363533663062/-/resize/300x300/-/format/webp/IMG_2852.JPG" />
                                        <div class="bottom_image">
                                        <img class="third_img" src="https://thumb.tildacdn.com/tild6530-6237-4136-b366-346233333939/-/resize/400x300/-/format/webp/IMG_2863.JPG" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <p>The <strong> At the Bottom </strong> project is a reflection of artists about the origins of contemporary art. Using the classic postmodernist technique of mixing different cultural codes, artists reveal at the junction of these codes repeating symbols that form the basis of the history of art and human culture in general.</p>
                            <p>Classical sculpture, still life, R. Mutt Duchamp - recognizable cliches, understandable even to the most enlightened spectator. However, over time, all symbols lose their meaning, turning in the semantic field simply into indistinct muttering. "Beautiful" is the scariest word for art. This means that it has ceased to be "modern". That is, understandable to a living viewer, turning into a dead piece of paper or marble. However, those who know the history of art know that the "modern" in each era can only be formed from what has already been studied and considered by previous generations. Ruslan Solopeev and Ales Kochevnik reveal this relationship, revealing what is hidden "at the bottom".</p>
                            <p>The use of images borrowed from classical art is both flirting with the viewer, calculated for the effect of recognition, and an attempt to break through the impenetrable wall of the "aesthetic", returning the "voice" to the depicted.
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-11 offset-lg-1 mt-md-5">
                            <p>Ruslan writes: "The construction of the human eye is finely tuned to the perception of the surrounding world, helping a person to navigate in it. Each epoch carried out an" ontological throw-in "thereby developing a unique cultural code. The thickening of artistic symbolism forms a landscape that is ontologically perceived as richer than the everyday world. artist: to be a translator of the artistic design of being.</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Product Section Begin */}
            <section class="product spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="section-title">
                                <h4>New Listed</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row property__gallery">
                        <div class="col-lg-5 col-md-5 col-sm-6 mx-auto">
                            <div class="product__item">
                                <div class="product__item__pic set-bg"
                                    data-setbg="https://static.tildacdn.com/tild3530-3161-4038-a463-346238333435/IMG_2863.JPG">
                                </div>
                                <div class="product__item__text">
                                    <h5 class="font-weight-bold"><a href="#" class="text-dark">"Dino and the Butterfly"</a></h5>

                                    <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                    <div class="product__price">405 000 R.</div><button type="submit"
                                        class="mt-3 site-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-6 mx-auto">
                            <div class="product__item">
                                <div class="product__item__pic set-bg"
                                    data-setbg="https://thumb.tildacdn.com/tild3733-3266-4630-b534-383334323139/-/resize/518x/-/format/webp/IMG_2859.JPG">
                                </div>
                                <div class="product__item__text">
                                    <h5 class="font-weight-bold"><a href="#" class="text-dark">"Flamingos and Margarita"</a>
                                    </h5>

                                    <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                    <div class="product__price">405 000 R.</div><button type="submit"
                                        class="mt-3 site-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Section End */}

            {/* Product Section Begin */}
            <section class="product spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="section-title">
                                <h4>Series "At Marcel Duchamp"</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row property__gallery">
                        <div class="col-lg-5 col-md-5 col-sm-6 mx-auto">
                            <div class="product__item">
                                <div class="product__item__pic set-bg"
                                    data-setbg="https://static.tildacdn.com/tild3530-3161-4038-a463-346238333435/IMG_2863.JPG">
                                </div>
                                <div class="product__item__text">
                                    <h5 class="font-weight-bold"><a href="#" class="text-dark">"Dino and the Butterfly"</a></h5>

                                    <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                    <div class="product__price">405 000 R.</div><button type="submit"
                                        class="mt-3 site-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-6 mx-auto">
                            <div class="product__item">
                                <div class="product__item__pic set-bg"
                                    data-setbg="https://thumb.tildacdn.com/tild3733-3266-4630-b534-383334323139/-/resize/518x/-/format/webp/IMG_2859.JPG">
                                </div>
                                <div class="product__item__text">
                                    <h5 class="font-weight-bold"><a href="#" class="text-dark">"Flamingos and Margarita"</a>
                                    </h5>

                                    ] <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                    <div class="product__price">405 000 R.</div><button type="submit"
                                        class="mt-3 site-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Section End */}

            {/* Product Section Begin */}
            <section class="product spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="section-title">
                                <h4>Series "At the Bottom"</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row property__gallery">
                        <div class="col-lg-5 col-md-5 col-sm-6 mx-auto">
                            <div class="product__item">
                                <div class="product__item__pic set-bg"
                                    data-setbg="https://static.tildacdn.com/tild3530-3161-4038-a463-346238333435/IMG_2863.JPG">
                                </div>
                                <div class="product__item__text">
                                    <h5 class="font-weight-bold"><a href="#" class="text-dark">"Dino and the Butterfly"</a></h5>

                                    <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                    <div class="product__price">405 000 R.</div><button type="submit"
                                        class="mt-3 site-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-6 mx-auto">
                            <div class="product__item">
                                <div class="product__item__pic set-bg"
                                    data-setbg="https://thumb.tildacdn.com/tild3733-3266-4630-b534-383334323139/-/resize/518x/-/format/webp/IMG_2859.JPG">
                                </div>
                                <div class="product__item__text">
                                    <h5 class="font-weight-bold"><a href="#" class="text-dark">"Flamingos and Margarita"</a>
                                    </h5>

                                    <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                    <div class="product__price">405 000 R.</div><button type="submit"
                                        class="mt-3 site-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Section End */}

            {/* Discount Section Begin */}
            <section class="discount set-bg" data-setbg="webAssets/img/discount.jpg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 p-0">
                            <div class="discount__pic">
                                <img src="webAssets/img/discount.jpg" alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 p-0">
                            <div class="discount__text">
                                <div class="discount__text__title">
                                    <span>Discount</span>
                                    <h2>Summer 2019</h2>
                                    <h5><span>Sale</span> 50%</h5>
                                </div>
                                <div class="discount__countdown" id="countdown-time">
                                    <div class="countdown__item">
                                        <span>22</span>
                                        <p>Days</p>
                                    </div>
                                    <div class="countdown__item">
                                        <span>18</span>
                                        <p>Hour</p>
                                    </div>
                                    <div class="countdown__item">
                                        <span>46</span>
                                        <p>Min</p>
                                    </div>
                                    <div class="countdown__item">
                                        <span>05</span>
                                        <p>Sec</p>
                                    </div>
                                </div>
                                <a href="#">Shop now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Discount Section End */}

            {/* Trend Section Begin */}
            <section class="trend spad">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div>
                                <div class="section-title">
                                    <h4>The main directions of InArt development</h4>
                                </div>
                                <a href="#" class="blog__feature__item">
                                    <div class="blog__feature__item__pic">
                                        <img src="webAssets/img/blog/sidebar/fp-1.jpg" alt="" />
                                    </div>
                                    <div class="blog__feature__item__text">
                                        <h6>Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities
                                            Kend...Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities
                                            Kend...</h6>
                                        <span>Seb 17, 2019</span>
                                    </div>
                                </a>
                                <a href="#" class="blog__feature__item">
                                    <div class="blog__feature__item__pic">
                                        <img src="webAssets/img/blog/sidebar/fp-2.jpg" alt="" />
                                    </div>
                                    <div class="blog__feature__item__text">
                                        <h6>Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities
                                            Kend...Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities
                                            Kend...</h6>
                                        <span>Seb 17, 2019</span>
                                    </div>
                                </a>
                                <a href="#" class="blog__feature__item">
                                    <div class="blog__feature__item__pic">
                                        <img src="webAssets/img/blog/sidebar/fp-3.jpg" alt="" />
                                    </div>
                                    <div class="blog__feature__item__text">
                                        <h6>Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities
                                            Kend...Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities
                                            Kend...</h6>
                                        <span>Seb 17, 2019</span>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Trend Section End */}

            {/* Services Section Begin */}
            <section class="services spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="services__item">
                                <i class="fa fa-car"></i>
                                <h6>Free Shipping</h6>
                                <p>For all oder over $99</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="services__item">
                                <i class="fa fa-money"></i>
                                <h6>Money Back Guarantee</h6>
                                <p>If good have Problems</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="services__item">
                                <i class="fa fa-support"></i>
                                <h6>Online Support 24/7</h6>
                                <p>Dedicated support</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4 col-sm-6">
                            <div class="services__item">
                                <i class="fa fa-headphones"></i>
                                <h6>Payment Secure</h6>
                                <p>100% secure payment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Services Section End */}

            {/* Footer Section Begin */}
            <footer class="footer bg-light">
                <div class="container">
                    <div class="row">
                        <div class="offset-md-3 col-lg-6 col-md-6 col-sm-6">
                            <div class="footer__newslatter">
                                <h6>NEWSLETTER</h6>
                                <form action="#">
                                    <input type="text" placeholder="Email" />
                                    <button type="submit" class="site-btn">Subscribe</button>
                                </form>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    cilisis.</p>
                                <div class="footer__social">
                                    <a href="#"><i class="fa fa-facebook"></i></a>
                                    <a href="#"><i class="fa fa-twitter"></i></a>
                                    <a href="#"><i class="fa fa-youtube-play"></i></a>
                                    <a href="#"><i class="fa fa-instagram"></i></a>
                                    <a href="#"><i class="fa fa-pinterest"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            <div class="footer__copyright__text">
                                <p>Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script> All rights reserved
                                </p>
                            </div>
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer Section End */}

            {/* Search Begin */}
            <div class="search-model">
                <div class="h-100 d-flex align-items-center justify-content-center">
                    <div class="search-close-switch">+</div>
                    <form class="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
            {/* Search End */}
        </body>
    )
}

export default Home