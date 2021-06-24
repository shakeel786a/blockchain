import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { authAction } from '../../../actions'
import { getAccount } from '../../../web3Integration/global.service'
import { useFetchAPI } from '../../../hooks'
import { getIsRegister } from '../../../http/common.http.service'

function Login(props) {
    const { isVisible, onClickClose } = props
    const dispatch = useDispatch()

    const [
        {
            isLoading: isCheckRegisterLoading,
            response: { isSuccess: isCheckRegisterSuccess, data: checkRegisterData  }
        },
        checkRegistration
    ] = useFetchAPI()

    useEffect(() => {
        if (isCheckRegisterLoading === false) {
            if (isCheckRegisterSuccess && checkRegisterData) {
                onClickClose()
                dispatch({ type: authAction.SET_WEB_USER_INFO, payload: checkRegisterData.userInfo })
            }
        }
    }, [isCheckRegisterLoading, isCheckRegisterSuccess, checkRegisterData])

    const onClickMetamask = () => {
        (async () => {
            const address = await getAccount()
            checkRegistration({
                api: getIsRegister,
                payload: {
                    params: {
                        address
                    }
                }
            })
        })()
    }

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
                                    <button type="button" class="w-100 btn btn-outline-success" onClick={onClickMetamask}>
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
            {isVisible ? modalSection : null}  
        </>
    )
}

export default Login