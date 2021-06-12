import React from 'react'

import NftTokenListCell from './NftTokenListCell'

function NftTokenListComponent(props) {
    const { list } = props

    let listSection = null
    if (list && list.length) {
        listSection = list.map(item => {
            return <NftTokenListCell item={item} />
        })
    }

    return (
        <div class="content-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-responsive-lg mb-0 table-striped">
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>NFT Id</th>
                                                <th>Aucation Start Time</th>
                                                {/* <th class="pl-5 width200">Billing Address
                                                </th> */}
                                                <th>Starting price</th>
                                            </tr>
                                        </thead>
                                        <tbody id="customers">
                                            {listSection}
                                        </tbody>
                                    </table>
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