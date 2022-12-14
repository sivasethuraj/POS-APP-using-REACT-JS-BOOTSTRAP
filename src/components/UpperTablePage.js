import React from 'react'

function UpperTablePage () {

    return (
        <div className="col-sm-12 col-md-5 leftside-top istrow overflow-auto" id="tablepage" >
            <div class="my-1">
                <input className="form-control" value="Total Price Is : " readOnly id="wholetotalprice" type="text" />

                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody id="tbody"></tbody>
                </table>
            </div>
        </div>
    )
}

export { UpperTablePage };