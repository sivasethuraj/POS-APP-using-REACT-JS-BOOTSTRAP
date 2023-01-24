import React, { useContext, useEffect } from 'react'
import { InventoryContext } from "../../App";

function Payable ( props ) {

    useEffect( () => {
        const newTableOfItem = JSON.parse( localStorage.getItem( "inventory" ) );
        if ( newTableOfItem && newTableOfItem.length > 0 ) {
            setTableOfItems( newTableOfItem );
        }
    }, [] );

    const { tableOfItems, setTableOfItems } = useContext( InventoryContext );
    const style = {
        height: "80vh",
        overflow: "auto",
    }

    const handlePay = () => {
        if ( change < 1 ) {
            alert( "please enter correct tender amount !" );
            return;
        }
        const { setPayablePage, setBillingValues, setTableRows, setWholeTotalPrice, tableRows } = props;
        setBillingValues( {
            amount: 0,
            gstAmount: 0,
            payable: 0,
            tender: 0,
            change: 0,
        } );
        const storeSalesReport = () => {
            const newSalesReportArray = tableRows.map( ( item ) => {
                let type = item.id >= 41 ? 'inventory-item' : 'image-item';
                return {
                    id: item.id,
                    name: item.name,
                    soldQuantity: item.quantity,
                    totalPrice: item.totalPrice,
                    date: new Date(),
                    type: type,
                };
            } );

            let oldSalesReportArray = JSON.parse( localStorage.getItem( 'salesReport' ) );
            if ( oldSalesReportArray && oldSalesReportArray.length > 0 ) {

                localStorage.setItem( 'salesReport', JSON.stringify( [
                    ...oldSalesReportArray, ...newSalesReportArray,
                ]
                ) );
            } else {
                localStorage.setItem( 'salesReport', JSON.stringify( [
                    ...newSalesReportArray,
                ]
                ) );
            }
        };

        if ( tableOfItems.length > 0 ) {

            tableRows.map( ( tableItem ) => {
                tableOfItems.map( ( inventoryItems ) => {

                    if ( tableItem.id === inventoryItems.id ) {
                        console.log( "id matched", tableItem.id, ' ', inventoryItems.id )
                        let sold, stock = 0;
                        sold = tableItem.quantity + inventoryItems.sold;
                        stock = inventoryItems.purchaseQuantity - sold;
                        const newInventoryItem = {
                            ...inventoryItems,
                            sold: sold,
                            inStock: stock,
                        };

                        let localStorageInventoryArray = JSON.parse( localStorage.getItem( "inventory" ) );

                        const newTableOfItem = localStorageInventoryArray.filter( ( item ) => item.id !== inventoryItems.id );
                        console.log( 'newInventoryItem ', newInventoryItem );
                        console.log( 'newTableOfItem ', newTableOfItem );


                        localStorage.setItem(
                            "inventory",
                            JSON.stringify( [
                                ...newTableOfItem,
                                {
                                    ...newInventoryItem,
                                },
                            ] )
                        );

                        setTableOfItems( [
                            ...newTableOfItem,
                            {
                                ...newInventoryItem,
                            },
                        ] );
                    } else {
                        console.log( "id didnt matched" )
                    }
                } );
            } );
            storeSalesReport();
        }
        setPayablePage( ( prev ) => {
            return !prev;
        } );
        setTableRows( [] );
        setWholeTotalPrice( 0 );
        alert( "Successfully Paid!" );

    }
    let { amount, gstAmount, payable, tender, change } = props.billingValues;

    gstAmount = parseFloat( amount * 0.18 ).toFixed( 2 );
    payable = ( parseFloat( amount ) + parseFloat( gstAmount ) ).toFixed( 2 );
    change = ( parseFloat( tender ) - parseFloat( payable ) ).toFixed( 2 );
    return (
        <div className="col-sm-12 col-md-5"
            style={ style }>
            <div className="my-1">
                <input
                    className="form-control"
                    value={ `Change : $ ${change}` }
                    readOnly
                    type="text"
                />

                <div className="row my-1">
                    <span className="col-8 text-center">Amount</span>
                    <span className="col-4">
                        <input
                            readOnly
                            className="form-control"
                            type="text"
                            value={ `$ ${amount}` }
                        />
                    </span>
                </div>
                <div className="row my-1 ">
                    <span className="col-8 text-center">GST Amount </span>
                    <span className="col-4">
                        <input
                            className=" form-control "
                            type="text"
                            readOnly
                            value={ `$ ${gstAmount}` }
                        />
                    </span>
                </div>
                <hr />
                <div className="row my-1">
                    <span className="col-8 text-danger text-center">Payable</span>
                    <span className="col-4">
                        <input
                            type="text"
                            className="form-control"
                            readOnly
                            value={ `$ ${payable}` }
                        />
                    </span>
                </div>
                <hr />
                <div className="row my-1">
                    <span className="col-8 text-primary text-center">Tender</span>
                    <span className="col-4">
                        <input
                            className="form-control"
                            type="text"
                            readOnly
                            value={ `$ ${tender}` } />
                    </span>
                </div>
                <div className="row my-1">
                    <span className="col-8 text-primary text-center">Change</span>
                    <span className="col-4">
                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            value={ `$ ${change}` }
                        />
                    </span>
                </div>
                <div className="row py-3 justify-content-center">
                    <button className="col-3 btn btn-outline-success text-center"
                        onClick={ () => handlePay()
                        }>
                        PAY
                    </button>
                </div>
            </div>
        </div>
    );
}
export { Payable };