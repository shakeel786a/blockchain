import React from 'react'

import { Avatar } from '../../../commonPages'

function NftTokenListCell(props) {
    const { item, onClickAction } = props
    // console.log('item--------------------', item)
    const { nftID, imageOrVideo, thumbnail, nftName, startTime, status, startingPrice, reservePrice } = item
    
    return (
        <tr className="btn-reveal-trigger">
            <td className="py-3">
                <Avatar uri={thumbnail || imageOrVideo} isViewFile title="View file" style={{ width: 40, height: 40 }} />
            </td>
            <td className="py-2"> <a href="#">{nftName}</a></td>
            <td className="py-2">{nftID}</td>
            <td className="py-2">{startTime}</td>
            <td className="py-2">{status}</td>
            <td className="py-2">{startingPrice}</td>
            <td className="py-2">{reservePrice}</td>
            <td className="py-2 text-right">
                <div className="dropdown"><button className="btn btn-primary tp-btn-light sharp" type="button" data-toggle="dropdown"><span className="fs--1"><svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0" y="0" width="24" height="24"></rect><circle fill="#000000" cx="5" cy="12" r="2"></circle><circle fill="#000000" cx="12" cy="12" r="2"></circle><circle fill="#000000" cx="19" cy="12" r="2"></circle></g></svg></span></button>
                    <div className="dropdown-menu dropdown-menu-right border py-0">
                        <div className="py-2">
                            <a className="dropdown-item" role="button" onClick={() => onClickAction(item, 'view')}>View</a>
                            <a className="dropdown-item" role="button" onClick={() => onClickAction(item, 'edit')}>Edit</a>
                            {/* <a className="dropdown-item" role="button" onClick={() => onClickAction(item, 'checkBids')}>Check bids</a> */}
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default NftTokenListCell