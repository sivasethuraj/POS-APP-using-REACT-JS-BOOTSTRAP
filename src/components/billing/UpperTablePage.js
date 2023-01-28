import React, { useEffect } from 'react'
import "./hover.css"

function UpperTablePage ( { tableRows, setTableRows, wholeTotalPrice, setWholeTotalPrice, setBillingValues } ) {

    const style = {
        height: "80vh",
        overflow: "auto",
        display: "flex",
        justifyContent: "center",
    }
    const tdWidth = {
        width: "10em",
    }
    useEffect( () => {
        let totalPrice = 0;
        for ( const i in tableRows ) {
            totalPrice += tableRows[ i ].totalPrice;
        }
        setWholeTotalPrice( totalPrice );
    } )

    return (
        <div className="col-sm-12 col-md-5 overflow-auto" id="tablepage" style={ style }>
            <div className="my-1">
                <input className="form-control" value={ `Total Price Is : $ ${wholeTotalPrice}` } readOnly id="wholetotalprice" type="text" />

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
                                    tableRows={ tableRows }
                                    setTableRows={ setTableRows }
                                    setBillingValues={ setBillingValues } />
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

    const removeItem = ( clickedItemId ) => {
        if ( window.confirm( 'Are ou sure you want to delete!' ) ) {

            const { tableRows, setTableRows } = props;
            localStorage.removeItem( id );
            setTableRows( tableRows.filter( ( item ) => item.id !== clickedItemId ) )
            console.log( "removed id: ", id, "successfully" );
        }
    }
    return (
        <tr>
            <td>{ name }</td>
            <td>{ quantity }</td>
            <td className="text-center">$ { unitPrice }</td>
            <td className="text-center">$ { totalPrice }</td>
            <td
                id={ id }
                className="text-center"
                onClick={ () => removeItem( id ) }
            >
                <i className="fa-solid fa-xmark" id={ id }></i>
            </td>

        </tr>
    );
}
export { Tl };