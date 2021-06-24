import React from 'react'

function BidForm() {
    const onClickMinus = () => {}
    const onClickPlus = () => {}

    return (
        <div class="row" style={{ marginLeft: 3, marginBottom: 15, marginTop: 20 }}>
            <div class="footer__social">
                <a role="button" onClick={onClickMinus}><i class="fa fa-minus"></i></a>
            </div>
            <div style={priceContainer}>12</div>
            <div class="footer__social">
                <a role="button" onClick={onClickPlus}><i class="fa fa-plus"></i></a>
            </div>
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

export default BidForm