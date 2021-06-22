import React, { useState } from 'react'

function Login(props) {
    const { isVisible, onClickClose } = props
    // const [isVisible, setIsVisible] = useState(false)

    // const onClickLogin = () => setIsVisible(true)
    // const onClickClose = () => setIsVisible(false)

    const modalSection = (
        <section class="at-login-form">
            <div class="modal fade" id="at-login" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content p-3">
                        <div class="modal-header">
                            <h3>Connect to Wallet</h3>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={onClickClose}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <button type="button" class="w-100 btn btn-outline-success">
                                        <img src_x="./webAssets/img/metamask.png" src="./webAssets/img/metamask.png" height="28" width="28" class="mr-1 v-align-middle" />
                                        MetaMask
                                    </button>
                                </div>
                                <div class="form-group mb-0">
                                    <button type="button" class="w-100 btn btn-outline-success">
                                        <img src_x="./webAssets/img/binance.png" src="./webAssets/img/binance.png" height="28" width="28" class="mr-1 v-align-middle" />
                                        BinanceChain
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

    return (
        <>
            {/* <div class="col-lg-3">
                <div class="header__right">
                    <div class="header__right__auth">
                        <a role="button" data-toggle="modal" data-target="#at-login" onClick={onClickLogin}>Login</a>
                    </div>
                </div>
            </div> */}
            {isVisible ? modalSection : null}  
        </>
    )
}

export default Login