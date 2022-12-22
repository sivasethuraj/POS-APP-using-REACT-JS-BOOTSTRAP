import React, { useState, useEffect } from 'react'
import "./hover.css"

function UpperTablePage ( { tableRows, setTableRows, wholeTotalPrice, setWholeTotalPrice } ) {

    const style = {
        height: "80vh",
        overflow: "auto",
    }
    const tdWidth = {
        width: "10em",
    }

    return (
        <div className="col-sm-12 col-md-5 overflow-auto" id="tablepage" style={ style }>
            <div className="my-1">
                <input className="form-control" value={ `Total Price Is : ${wholeTotalPrice}` } readOnly id="wholetotalprice" type="text" />

                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th style={ tdWidth }>Item</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
                            <th>Remove</th>
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

    const removeItem = ( e ) => {

        let id = e.target.id;
        // console.log( e.target.id );
        localStorage.removeItem( id );
        console.log( "removed item successfully" );
    }
    return (
        <tr>
            <td>{ name }</td>
            <td >{ quantity }</td>
            <td className="text-center">{ unitPrice }</td>
            <td className="text-center">{ totalPrice }</td>
            <td
                id={ id }
                className="text-center"
                onClick={ ( e ) => removeItem( e ) }
            >
                <i className="fa-solid fa-xmark" id={ id }></i>
            </td>

        </tr>
    );
}
export { Tl };