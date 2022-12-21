import React, { useState, useEffect } from 'react'
import "./hover.css"

function UpperTablePage ( { tableRows, setTableRows, wholeTotalPrice, setWholeTotalPrice } ) {

    const style = {
        height: "80vh",
        overflow: "auto",
    }

    return (
        <div className="col-sm-12 col-md-5 overflow-auto" id="tablepage" style={ style }>
            <div className="my-1">
                <input className="form-control" value={ `Total Price Is : ${wholeTotalPrice}` } readOnly id="wholetotalprice" type="text" />

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
                    <tbody id="tbody">
                        {
                            tableRows && tableRows.map( ( item, index ) => {
                                return <Tl
                                    key={ index }
                                    item={ item }
                                    setTableRows={ setTableRows }
                                    setWholeTotalPrice={ setWholeTotalPrice } />
                            } )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export { UpperTablePage };


function Tl ( props ) {

    const { id, name, quantity, unitPrice, totalPrice } = props.item;


    return (
        <tr>
            <td>{ name }</td>
            <td>{ quantity }</td>
            <td>{ unitPrice }</td>
            <td>{ totalPrice }</td>
            <td id={ id }>
                <i className="fa-solid fa-xmark" id={ id }></i>
            </td>

        </tr>
    );
}
export { Tl };