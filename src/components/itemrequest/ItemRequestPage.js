import React from 'react'
import { Link } from "react-router-dom";
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
                    <td>{ object.quantity }</td>
                    <td>{ ( object.date ) }</td>
                </tr> )
            sno = sno + 1;
        }
    }
}

function ItemRequestPage () {

    const style = {
        backgroundColor: 'grey',
        minHeight: '100vh',
    }

    return (
        <div style={ style }>
            <div className="container" >
                <div style={ heightStyle }>
                    <div className="row ">
                        <div className="col-3 ">
                            <Link to="/">
                                <i className="fa fa-home text-light bg-primary p-2 border border-dark rounded " aria-hidden="true" style={ { cursor: "pointer" } }></i></Link>
                        </div>
                        <div className="col ">
                            <h3>Item Request</h3>
                        </div>
                    </div>

                    <div className="row">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Expected Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                { tr }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row d-flex justify-content-end">
                    <button className='col-2 col-md-1 btn btn-primary mx-3' type='reset'>Reset</button>
                    <button className='col-2 btn btn-primary col-md-1' type='submit' onClick={ () => addRows() }>Submit</button>
                </div>
                <div className="row mt-3">
                    <label className="col-md-1 col-3 form-group" htmlFor="itemname">Item Name</label>
                    <input className="col-md-2 form-group col-3 " id="itemname" type="text" />
                    <label className="col-md-1 col-3 " htmlFor="itemquantity">Quantity</label>
                    <input className="col-md-2 form-group col-3 " type="number" id="itemquantity" />
                    <label className="col-md-1 form-group col-3 " htmlFor="itemdate">Expected Date</label>
                    <input className="col-md-2 form-group col-3 " id='itemdate' type="date" />
                    <button className='col-md-1 btn btn-primary ms-2 col-3 ' >Add</button>
                </div>
            </div>
        </div>
    )
}

export default ItemRequestPage