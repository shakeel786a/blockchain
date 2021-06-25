import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { useFetchAPI } from '../../../hooks'
import { checkAuth } from '../../../helper/utility'
import { postPlaceBidAPI } from '../../../http/common.http.service'

function BidForm(props) {
    const { detailInfo, authData, bidFormSuccess, onRequestLogin } = props
    const { nftID, lastBidPrice, step } = detailInfo
    const { userId, walletAddress } = authData || {}
    const transactionHash = "abcdefghijklm"
    const [formInfo, setFormInfo] = useState({ dateTime: new Date(), userId, walletAddress, nftID, transactionHash, price: lastBidPrice })

    const [
        {
            isLoading: isPlaceBidLoading,
            response: { isSuccess: isPlaceBidSuccess, data: placeBidData }
        },
        placeBid
    ] = useFetchAPI()

    useEffect(() => {
        if (isPlaceBidLoading === false) {
            if (isPlaceBidSuccess && placeBidData) {
                bidFormSuccess(formInfo.price)
            }
        }
    }, [isPlaceBidLoading, isPlaceBidSuccess, placeBidData])

    const onClickMinus = () => {
        const tempPrice = formInfo.price - step
        if (tempPrice >= lastBidPrice) {
            setFormInfo({ ...formInfo, price: tempPrice })
        }
    }
    const onClickPlus = () => {
        const isLogin = checkAuth(authData)
        if (isLogin) {
            const tempPrice = formInfo.price + step
            setFormInfo({ ...formInfo, price: tempPrice })
        } else {
            onRequestLogin()
        }
    }

    const onClickPlaceBid = () => {
        const isLogin = checkAuth(authData)
        if (isLogin) {
            console.log('formInfo================', formInfo)
            placeBid({
                api: postPlaceBidAPI,
                payload: {
                    body: {
                        ...formInfo
                    }
                }
            })
        } else {
            onRequestLogin()
        }
    }

    return (
        <div style={{ marginBottom: 15, marginTop: 20 }}>
            <div class="row" style={{ marginLeft: 3, marginBottom: 15 }}>
                <div class="footer__social">
                    <a role="button" onClick={onClickMinus}><i class="fa fa-minus"></i></a>
                </div>
                <div style={priceContainer}>{formInfo.price}</div>
                <div class="footer__social">
                    <a data-toggle="modal" data-target="#at-login" role="button" onClick={onClickPlus}><i class="fa fa-plus"></i></a>
                </div>
            </div>
            <div class="product__details__button mb-0" role="button" onClick={onClickPlaceBid}><a data-toggle="modal" data-target="#at-login" class="cart-btn">Place a bid</a></div>
        </div>
    )
}

const priceContainer = {
    // minWidth: '10px',
    borderRadius: '10%',
    marginLeft: '10px',
    marginRight: '10px',
    paddingLeft: '15px',
    paddingRight: '15px',
    display: 'inline-block',
    height: '40px',
    background: '#e1e1e1',
    fontSize: '15px',
    color: '#111111',
    lineHeight: '40px',
    textAlign: 'center',
    marginBottom:' 5px',
}

const mapStateToProps = state => ({
    authData: state.web.app.auth.authData
})

export default connect(mapStateToProps)(BidForm)