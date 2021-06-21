import React from 'react'

function Header() {
    return (
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
    )
}

export default Header