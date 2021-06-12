import React from 'react'

import { Avatar } from '../commonPages'

function NftTokenListCell(props) {
    const { item } = props
    const { NFTtokenid, Image_Url, Name, Description, Royalties, Properties, datetime, Starting_Price, Minimum_Price, Reserve_Price } = item
    return (
        <tr class="btn-reveal-trigger">
            <td class="py-3">
                <Avatar uri={Image_Url} style={{ width: 40, height: 40 }} />
            </td>
            <td class="py-2"> <a href="#">{Name}</a></td>
            <td class="py-2">{NFTtokenid}</td>
            <td class="py-2">{datetime}</td>
            <td class="py-2">{Starting_Price}</td>
        </tr>
    )
}

export default NftTokenListCell