import React from 'react'

import { Avatar } from '../../commonPages'

function Home() {
    return (
        <body>
            {/*  */}
            {/*  Page Preloder  */}
            <div id="preloder">
                <div class="loader"></div>
            </div>

            {/*  Offcanvas Menu Begin  */}
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
                        {/* <Avatar uri="./webAssets/img/logo.png" /> */}
                    </a>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div class="offcanvas__auth">
                    <a href="#">Register</a>
                </div>
            </div>
            {/*  Offcanvas Menu End  */}

            {/*  Header Section Begin  */}
            <header class="header">
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
            </header>
            {/*  Header Section End  */}

            {/*  Categories Section Begin  */}
            <section class="categories">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 p-0">
                            <div class="categories__item categories__large__item set-bg"
                                data-setbg="https://static.tildacdn.com/tild3064-3832-4166-a230-323764346462/IMG_20210519_165615.jpg">
                                <div class="categories__text">
                                    <h1>Women’s fashion</h1>
                                    <p>Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore
                                        edolore magna aliquapendisse ultrices gravida.</p>
                                    <a href="#">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6 mx-auto p-0">
                                    <div class="categories__item set-bg"
                                        data-setbg="https://static.tildacdn.com/tild6133-6637-4139-b330-613430666566/IMG_2849.JPG">
                                        <div class="categories__text">
                                            <h4>Men’s fashion</h4>
                                            <p>358 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 mx-auto p-0">
                                    <div class="categories__item set-bg"
                                        data-setbg="https://static.tildacdn.com/tild6530-6237-4136-b366-346233333939/IMG_2863.JPG">
                                        <div class="categories__text">
                                            <h4>Kid’s fashion</h4>
                                            <p>273 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 mx-auto p-0">
                                    <div class="categories__item set-bg"
                                        data-setbg="https://static.tildacdn.com/tild3431-3636-4837-b162-626438363337/aIMG_5123.jpg">
                                        <div class="categories__text">
                                            <h4>Cosmetics</h4>
                                            <p>159 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6 mx-auto p-0">
                                    <div class="categories__item set-bg"
                                        data-setbg="https://static.tildacdn.com/tild3661-3866-4662-b035-386438363732/000BEB76-0C9A-4750-8.jpeg">
                                        <div class="categories__text">
                                            <h4>Accessories</h4>
                                            <p>792 items</p>
                                            <a href="#">Shop now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Categories Section End  */}

            {/*  Product Section Begin  */}
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
                                <div class="product__item__pic set-bg" data-setbg="https://static.tildacdn.com/tild3530-3161-4038-a463-346238333435/IMG_2863.JPG">
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
                                <div class="product__item__pic set-bg" data-setbg="https://thumb.tildacdn.com/tild3733-3266-4630-b534-383334323139/-/resize/518x/-/format/webp/IMG_2859.JPG">
                                </div>
                                <div class="product__item__text">
                                    <h5 class="font-weight-bold"><a href="#" class="text-dark">"Flamingos and Margarita"</a></h5>

                                    <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                    <div class="product__price">405 000 R.</div><button type="submit"
                                        class="mt-3 site-btn">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Product Section End  */}

                {/*  Product Section Begin  */}
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
                                    <div class="product__item__pic set-bg" data-setbg="https://static.tildacdn.com/tild3530-3161-4038-a463-346238333435/IMG_2863.JPG">
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
                                    <div class="product__item__pic set-bg" data-setbg="https://thumb.tildacdn.com/tild3733-3266-4630-b534-383334323139/-/resize/518x/-/format/webp/IMG_2859.JPG">
                                    </div>
                                    <div class="product__item__text">
                                        <h5 class="font-weight-bold"><a href="#" class="text-dark">"Flamingos and Margarita"</a></h5>
            
                                ]       <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                        <div class="product__price">405 000 R.</div><button type="submit"
                                            class="mt-3 site-btn">Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Product Section End  */}

                {/*  Product Section Begin  */}
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
                                    <div class="product__item__pic set-bg" data-setbg="https://static.tildacdn.com/tild3530-3161-4038-a463-346238333435/IMG_2863.JPG">
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
                                    <div class="product__item__pic set-bg" data-setbg="https://thumb.tildacdn.com/tild3733-3266-4630-b534-383334323139/-/resize/518x/-/format/webp/IMG_2859.JPG">
                                    </div>
                                    <div class="product__item__text">
                                        <h5 class="font-weight-bold"><a href="#" class="text-dark">"Flamingos and Margarita"</a></h5>
            
                                        <p> <small> Ales the Nomad; mixed media on canvas; 140x180 cm;2021</small></p>
                                        <div class="product__price">405 000 R.</div><button type="submit"
                                            class="mt-3 site-btn">Buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Product Section End  */}

            {/*  Discount Section Begin  */}
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
            {/*  Discount Section End  */}

            {/*  Trend Section Begin  */}
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
                                            <h6>Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities Kend...</h6>
                                            <span>Seb 17, 2019</span>
                                        </div>
                                    </a>
                                    <a href="#" class="blog__feature__item">
                                        <div class="blog__feature__item__pic">
                                            <img src="webAssets/img/blog/sidebar/fp-2.jpg" alt="" />
                                        </div>
                                        <div class="blog__feature__item__text">
                                            <h6>Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities Kend...</h6>
                                            <span>Seb 17, 2019</span>
                                        </div>
                                    </a>
                                    <a href="#" class="blog__feature__item">
                                        <div class="blog__feature__item__pic">
                                            <img src="webAssets/img/blog/sidebar/fp-3.jpg" alt="" />
                                        </div>
                                        <div class="blog__feature__item__text">
                                            <h6>Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities Kend...Amf Cannes Red Carpet Celebrities Kend...</h6>
                                            <span>Seb 17, 2019</span>
                                        </div>
                                    </a>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            {/*  Trend Section End  */}

            {/*  Services Section Begin  */}
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
            {/*  Services Section End  */}

            {/*  Footer Section Begin  */}
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
                            {/*  Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.  */}
                            <div class="footer__copyright__text">
                                <p>Copyright &copy;
                                    <script>document.write(new Date().getFullYear());</script> All rights reserved 
                                </p>
                            </div>
                            {/*  Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0.  */}
                        </div>
                    </div>
                </div>
            </footer>
            {/*  Footer Section End  */}

            {/*  Search Begin  */}
            <div class="search-model">
                <div class="h-100 d-flex align-items-center justify-content-center">
                    <div class="search-close-switch">+</div>
                    <form class="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>
            {/*  Search End  */}
        </body>
    )
}

export default Home