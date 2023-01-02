import React from 'react'
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
                                    setTableRows={ setTableRows }
                                    setWholeTotalPrice={ setWholeTotalPrice }
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

    const updaterFunction = () => {
        let newTableRow = [];
        let wholeTotalPrice = 0;

        for ( const key in localStorage ) {

            if ( localStorage.hasOwnProperty( key ) ) {

                let object = JSON.parse( localStorage.getItem( key ) );
                newTableRow.unshift( object );
                wholeTotalPrice += object.totalPrice;
            }
        }
        const { setTableRows, setWholeTotalPrice, setBillingValues } = props;
        setTableRows( () => newTableRow );
        setWholeTotalPrice( wholeTotalPrice );

        setBillingValues( ( prev ) => {
            console.log( "gstAmount:", parseFloat( prev.amount * 0.18 ).toFixed( 2 ) )
            return {
                ...prev,
                amount: wholeTotalPrice,
            }
        } );


    };

    const removeItem = ( e ) => {
        let id = e.target.id;
        localStorage.removeItem( id );
        updaterFunction();
        console.log( "removed id: ", id, "successfully" );
    }
    return (
        <tr>
            <td>{ name }</td>
            <td >{ quantity }</td>
            <td className="text-center">$ { unitPrice }</td>
            <td className="text-center">$ { totalPrice }</td>
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