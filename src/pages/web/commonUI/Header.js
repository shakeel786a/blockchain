import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { Avatar } from '../../../commonPages'
import Register from '../Auth/Register'
import Login from '../Auth/Login'

function Header() {
    const [isVisibleInfo, setIsVisibleInfo] = useState({ isLoginVisible: false, isRegisterVisible: false })

    const authData = useSelector(state => state.web.app.auth.authData)
    console.log('authData==============', authData)
    const { walletAddress, avatar } = authData

    const onClickClose = () => setIsVisibleInfo({ isLoginVisible: false, isRegisterVisible: false })
    const onClickLogin = () => setIsVisibleInfo({ isLoginVisible: true, isRegisterVisible: false })
    const onClickRegister = () => setIsVisibleInfo({ isLoginVisible: false, isRegisterVisible: true })

    return (
        <>
            <header class="header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="header__logo">
                                <h2>Demo</h2>
                                <a href="#" class="d-block d-md-none" data-toggle="modal" data-target="#at-signup-form">Register</a>
                            </div>
                        </div>
                        
                        <div class="col-lg-10 d-flex justify-content-end">
                            <div class="header__right">
                                <div class="header__right__auth">
                                    {walletAddress ? (
                                        <span class="circle_img">
                                            <Avatar uri={avatar || "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"} class="img-fluid avatar" />
                                        </span>
                                    ) : (
                                        <a role="button" class="site-btn bg-primary text-white" data-toggle="modal" data-target="#at-signup-form" onClick={onClickRegister}>Register</a>
                                    )}
                                </div>
                            </div>
                            <div class="header__right">
                                <div class="header__right__auth">
                                    {walletAddress ? (
                                        <a role="button" class="site-btn text-white">{walletAddress}</a>
                                    ) : (
                                        <a role="button" class="site-btn text-white" data-toggle="modal" data-target="#at-login" onClick={onClickLogin}>Connect Wallet</a>
                                    )}
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
            <Register isVisible={isVisibleInfo.isRegisterVisible} onClickClose={onClickClose} onClickLogin={onClickLogin} />
            {/* Login */}
            <Login isVisible={isVisibleInfo.isLoginVisible} onClickClose={onClickClose} />
        </>
    )
}

export default Header