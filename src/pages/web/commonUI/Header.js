import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import { authAction } from '../../../actions'
import { Avatar } from '../../../commonPages'
import Register from '../Auth/Register'
import Login from '../Auth/Login'
import { useGetIsRegisterAPI } from '../../../hooks'

function Header(props) {
    const { authData, setAuthData } = props
    const [isVisibleInfo, setIsVisibleInfo] = useState({ isLoginVisible: false, isRegisterVisible: false })

    const { walletAddress, avatar, isNewUser } = authData
    const [isChangedAccount, setIsChangedAccount] = useState(false)

    const [
        {
            isLoading: isCheckRegisterLoading,
            response: { isSuccess: isCheckRegisterSuccess, data: checkRegisterData  }
        },
        checkRegistration
    ] = useGetIsRegisterAPI()

    //#region change the metamask id
    window.ethereum.on('accountsChanged', function (accounts) {
        if (walletAddress !== accounts[0]) {
            setIsChangedAccount(true)
            // console.log('changedAccount=============', accounts[0])
            checkRegistration({ address: accounts[0] }) 
        }
    })
    //#endregion change the metamask id

    useEffect(() => {
        if (isCheckRegisterLoading === false && isChangedAccount) {
            if (isCheckRegisterSuccess && checkRegisterData) {
                setIsChangedAccount(false)
                // console.log('checkRegisterData===========', checkRegisterData)
                const { userInfo, isNewUser } = checkRegisterData
                if (isNewUser === false) {
                    setAuthData({ ...userInfo, isNewUser })
                } else {
                    setAuthData({ isNewUser })
                }
                onClickClose()
            }
        }
    }, [isCheckRegisterSuccess, checkRegisterData])

    const onClickClose = () => setIsVisibleInfo({ isLoginVisible: false, isRegisterVisible: false })
    const onClickLogin = () => setIsVisibleInfo({ isLoginVisible: true, isRegisterVisible: false })
    const onClickRegister = () => setIsVisibleInfo({ isLoginVisible: false, isRegisterVisible: true })
    const onClickAvatar = () => setIsVisibleInfo({ isLoginVisible: false, isRegisterVisible: true })

    let registerButttonSection = null
    let avatarSection = null
    let connectWalletSection = <a role="button" className="site-btn text-white" data-toggle="modal" data-target="#at-login" onClick={onClickLogin}>Connect Wallet</a>

    if (isNewUser) {
        registerButttonSection = <a role="button" className="site-btn bg-primary text-white" data-toggle="modal" data-target="#at-signup-form" onClick={onClickRegister}>Register</a>
        connectWalletSection = <a role="button" className="site-btn text-white">Wrong Network</a>
    } else if (walletAddress) {
        avatarSection = (
            <button className="circle_img" onClick={onClickAvatar}>
                <Avatar uri={avatar || "https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"} className="img-fluid avatar" />
            </button>
        )
        connectWalletSection =  <a role="button" className="site-btn text-white">{walletAddress}</a>
    }

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="header__logo">
                                <h2>Demo</h2>
                                <a href="#" className="d-block d-md-none" data-toggle="modal" data-target="#at-signup-form">Register</a>
                            </div>
                        </div>
                        
                        <div className="col-lg-10 d-flex justify-content-end">
                            <div className="header__right">
                                <div className="header__right__auth">
                                    {avatarSection}
                                    {registerButttonSection}
                                </div>
                            </div>
                            <div className="header__right">
                                <div className="header__right__auth">
                                    {connectWalletSection}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="canvas__open d-none">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>

            {/* Register */}
            <Register isVisible={isVisibleInfo.isRegisterVisible} editModalInfo={authData} onClickClose={onClickClose} onClickLogin={onClickLogin} />
            {/* Login */}
            <Login isVisible={isVisibleInfo.isLoginVisible} onClickClose={onClickClose} />
        </>
    )
}

const mapStateToProps = state => ({
    authData: state.web.app.auth.authData
})

const mapDispatchToProps = dispatch => ({
    setAuthData: payload => dispatch({ type: authAction.SET_WEB_USER_INFO, payload })
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)