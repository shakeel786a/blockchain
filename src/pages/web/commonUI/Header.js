import React, { useState } from 'react'

import Register from '../Auth/Register'
import Login from '../Auth/Login'

function Header() {
    const [isVisibleInfo, setIsVisibleInfo] = useState({ isLoginVisible: false, isRegisterVisible: false })

    const onClickCloseRegister = () => setIsVisibleInfo({ isLoginVisible: false, isRegisterVisible: false })
    const onClickCloseLogin = () => setIsVisibleInfo({ isLoginVisible: false, isRegisterVisible: false })
    const onClickLogin = () => setIsVisibleInfo({ isLoginVisible: true, isRegisterVisible: false })
    const onClickRegister = () => setIsVisibleInfo({ isLoginVisible: false, isRegisterVisible: true })

    return (
        <>
            <header class="header">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xl-3 col-lg-2">
                            <div class="header__logo d-flex align-items-center justify-content-between">
                                {/* <a href="./index.html"> */}
                                    {/*  <img src="img/logo.png" alt=""> */}
                                    <h2>Demo</h2>
                                {/* </a> */}
                                <a href="#" class="d-block d-md-none" data-toggle="modal" data-target="#at-signup-form">Register</a>

                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-7">

                        </div>
                        <div class="col-lg-3">
                            <div class="header__right">
                                <div class="header__right__auth">
                                    <a role="button" data-toggle="modal" data-target="#at-login" onClick={onClickLogin}>Login</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <div class="header__right">
                                <div class="header__right__auth">
                                    <a role="button" data-toggle="modal" data-target="#at-signup-form" onClick={onClickRegister}>Register</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="canvas__open d-none">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>
            </header>

            {/* Register */}
            <Register isVisible={isVisibleInfo.isRegisterVisible} onClickClose={onClickCloseRegister} onClickLogin={onClickLogin} />
            {/* Login */}
            <Login isVisible={isVisibleInfo.isLoginVisible} onClickClose={onClickCloseLogin} />
        </>
    )
}

export default Header