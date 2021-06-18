import React from 'react'

import NftTokenListCell from './NftTokenListCell'

const getTitleTag = type => {
    let tag = ''
    switch(type) {
        case 'sold':
            tag = 'Sold'
            break
        case 'active':
            tag = 'Active'
            break
        case 'comingSoon':
            tag = 'Coming Soon'
            break
        default:
            tag = 'Sold'
    }

    return tag
}

function NftTokenListComponent(props) {
    const { list = [], type, onClickAction } = props

    // console.log('list ==================', list)

    let listSection = null
    if (list && list.length) {
        listSection = (
            <table class="table table-responsive-lg mb-0 table-striped">
                <thead>
                    <tr>
                        <th>File</th>
                        <th>Name</th>
                        <th>NFT Id</th>
                        <th>Aucation Start Time</th>
                        <th>Status</th>
                        <th>Starting price</th>
                        <th>Reserve price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => {
                        return <NftTokenListCell item={item} onClickAction={onClickAction} />
                    })}
                </tbody>
            </table>
        )
    } else {
        listSection = <p class='text-center text-danger'>No data found!</p>
    }

    return (
        <div class="content-body">
            <div class="container-fluid">
                <label class="title-container">{getTitleTag(type)} NFT token list</label>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <h6>NFT Id</h6>
                                        <input type="text" class="form-control" placeholder="Search with NFT id" /* value={nftName} onChange={e => handleOnChange({ nftName: e.target.value })} */ />
                                    </div>

                                    <div class="col-lg-6">
                                        <h6>NFT Name</h6>
                                        <input type="text" class="form-control" placeholder="Search with NFT name" /* value={nftName} onChange={e => handleOnChange({ nftName: e.target.value })} */ />
                                    </div>
                                </div>
                                <hr />
                                <div class="table-responsive">
                                    {listSection}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NftTokenListComponent