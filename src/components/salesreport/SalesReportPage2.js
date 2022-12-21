import React from 'react'

const heightStyle = {
    minHeight: '70vh',
}

let tr = [];
function addRows () {

    for ( const key in localStorage ) {

        let sno = 1;
        const object = JSON.parse( localStorage.getItem( key ) );

        if ( localStorage.hasOwnProperty( key ) ) {
            tr.push(
                <tr>
                    <td>{ sno }</td>
                    <td>{ object.name }</td>
                    <td>{ object.soldQuantity }</td>
                    <td>{ ( parseFloat( object.price ) * parseFloat( object.soldQuantity ) ) }</td>
                </tr> )
            sno = sno + 1;
        }
    }
}

function SalesReportPage2 () {
    return (
        <div className="container" >
            <div>
                <div className="row ">
                    <div className="col-3 ">
                        <i class="fa fa-home text-light bg-primary p-2 border border-dark rounded " aria-hidden="true"></i>
                    </div>
                    <div className="col ">
                        <h3>Sales Report</h3>
                    </div>
                </div>
                <div className="row mt-3 justify-content-center">
                    <div className="row col-md-3">

                        <label className='col-3 row col-md-6' htmlFor="filter">Filter By : </label>
                        <select className='col-4 row col-md-6' name="day" id="filter">
                            <option value="">--Select--</option>
                            <option value="">Today</option>
                            <option value="">Yesterday</option>
                            <option value="">This Week</option>
                            <option value="">Last Week</option>
                            <option value="">This Month</option>
                            <option value="">Last Month</option>
                            <option value="">Custom</option>
                        </select>
                    </div>
                    <div className="row col-md-3">
                        <label className='col-3 row col-md-6' htmlFor="fromtime">From : </label>
                        <input className='col-4 row col-md-6' type="date" id="fromtime" />
                    </div>
                    <div className="row col-md-3">
                        <label className='col-3 row col-md-6' htmlFor="totime">To : </label>
                        <input className='col-4 row col-md-6' type="date" id="totime" />
                    </div>
                </div>
                <div style={ heightStyle } className="row mt-3">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Sold Quantity</th>
                                <th scope="col">Total Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            { tr }
                            <tr>
                                <td>1</td>
                                <td>jangiri</td>
                                <td>5</td>
                                <td>23$</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SalesReportPage2