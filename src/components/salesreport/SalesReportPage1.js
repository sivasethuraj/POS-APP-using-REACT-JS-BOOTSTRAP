import React from 'react'
import { Link } from 'react-router-dom';
const heightStyle = {
    minHeight: '70vh',
}

// let tr = [];
// function addRows () {

//     for ( const key in localStorage ) {

//         let sno = 1;
//         const object = JSON.parse( localStorage.getItem( key ) );

//         if ( localStorage.hasOwnProperty( key ) ) {
//             tr.push(
//                 <tr>
//                     <td>{ sno }</td>
//                     <td>{ object.name }</td>
//                     <td>{ object.soldQuantity }</td>
//                     <td>{ ( parseFloat( object.price ) * parseFloat( object.soldQuantity ) ) }</td>
//                 </tr> )
//             sno = sno + 1;
//         }
//     }
// }

function SalesReportPage1 () {
    return (
        <div className="container" >
            <div>
                <div className="row ">
                    <div className="col-3 ">
                        <Link to="/">
                            <i
                                style={ { cursor: "pointer" } } className="fa fa-home text-light bg-primary p-2 border border-dark rounded " aria-hidden="true"></i>
                        </Link>
                    </div>
                    <div className="col ">
                        <h3>Sales Report</h3>
                    </div>
                </div>
                <div className="row mt-3 justify-content-center">
                    <label className='col-3' htmlFor="filter">Filter By : </label>
                    <select className='col-3' name="day" id="filter">
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
                            { }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SalesReportPage1