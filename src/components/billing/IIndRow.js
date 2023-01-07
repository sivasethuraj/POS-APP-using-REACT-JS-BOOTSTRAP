import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./buttonstyle.css"
function IIndRow ( props ) {
    const { tableRows, setTableRows } = props;
    const style = {
        height: "auto",
        width: "100%",
    }
    const [ isValid, setIsValid ] = useState( false );
    const [ itemId, setItemid ] = useState( {
        iId: 0,
        iPrice: 0,
        iQuantity: 0,
    } );
    const specifiedObject = ( userPressedId ) => {
        const inventoryArray = JSON.parse( localStorage.getItem( "inventory" ) );
        if ( inventoryArray ) {
            const newTableRow = inventoryArray.filter( ( item ) => item.id === userPressedId );
            if ( newTableRow.length > 0 ) {
                return newTableRow[ 0 ];
            }
        }
        return false;
    }

    const handleIdChange = ( userPressedId ) => {
        const response = specifiedObject( userPressedId );
        if ( response ) {
            setItemid( ( prev ) => {
                return {
                    ...prev,
                    iPrice: response.price,
                }
            } );
        } else {
            setItemid( ( prev ) => {
                return {
                    ...prev,
                    iPrice: 0,
                }
            } );
        }

    }
    const quantityCheck = ( userQuantity ) => {

        setItemid( ( prev ) => {
            return {
                ...prev,
                iQuantity: userQuantity,
            }
        } );
        const response = specifiedObject( itemId.iId );
        if ( response ) {
            response.purchaseQuantity > userQuantity ? setIsValid( true ) : setIsValid( false );
        }
        console.log( 'validStock', isValid )
    }

    const changeTableData = () => {

        if ( isValid ) {
            const response = specifiedObject( itemId.iId );
            if ( response ) {
                console.log( "inner" )
                const { id, name, price } = response;
                let newProduct = {};
                const existingItem = tableRows.find( ( item ) => item.id === itemId.iId );
                if ( existingItem ) {

                    const newTableRows = tableRows.map( ( item ) => {
                        if ( item.id === itemId.iId ) {
                            return {
                                ...item,
                                quantity: ( item.quantity + 1 ),
                                totalPrice: ( ( item.quantity + 1 ) * item.unitPrice ),
                            }
                        } else {
                            if ( item.id ) {
                                return item;
                            }
                        }
                    } )
                    console.log( 'newTableRows:', newTableRows );
                    setTableRows( newTableRows );
                }
                else {
                    newProduct = {
                        id: id,
                        name: name,
                        quantity: itemId.iQuantity,
                        unitPrice: price,
                        totalPrice: parseInt( price ) * parseInt( itemId.iQuantity ),
                    }
                    setTableRows( ( prev ) => [ ...prev, { ...newProduct } ] );
                }
            }
        } else {
            console.log( "outer" )
            alert( 'out of stock !' );
        }
    }

    return (
        <>
            <div className="row " style={ style }>
                <div className="col-12 col-md-5 col-sm-12 ps-4 my-3">
                    <div className="row text-center ">
                        <div className="col-3 col-md-3">
                            <label className="form-label text-primary bg-light px-3 rounded" htmlFor="itemname">Item Id</label>
                        </div>
                        <div className="col-3 col-md-3">
                            <label className="form-label text-primary bg-light px-3 rounded" htmlFor="itemprice">Item Price</label>
                        </div>
                        <div className="col-3 col-md-3">
                            <label className="form-label text-primary bg-light px-3 rounded" htmlFor="itemquantity">
                                Quantity</label>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-3 col-md-3">
                            <input className="form-control" type="number" value={ itemId.iId } onChange={ ( e ) => {
                                handleIdChange( parseInt( e.target.value ) );
                                setItemid( ( prev ) => {
                                    return {
                                        ...prev,
                                        iId: parseInt( e.target.value ) || 0,
                                    };
                                } )
                            } } />
                        </div>
                        <div className="col-3 col-md-3">
                            <input className="form-control" type="number" readOnly id="itemprice" value={ itemId.iPrice } />
                        </div>
                        <div className="col-3 col-md-3">
                            <input className="form-control" type="number" id="itemquantity" value={ itemId.iQuantity }
                                onChange={ ( e ) => quantityCheck( parseInt( e.target.value ) ) } />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" id="addbtn"
                                onClick={ changeTableData }>Add</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7 col-sm-12 my-3">
                    <div className="col-12 col-sm-12 d-flex">
                        <div className="d-flex flex-column">
                            <Button
                                className="newbill  py-3"
                                name="New Bill"
                                height="3"
                                bg="bg-warning"
                            />
                            <Button
                                className="priceamendment px-1 py-0"
                                name="Price Amendment"
                                height="3"
                                bg="bg-warning"
                            />
                        </div>
                        <Button
                            className="$2 py-5"
                            name="$2"
                            height="6"
                            bg="bg-warning"
                            onClick={ () => props.setBillingValues( ( prev ) => {
                                return {
                                    ...prev,
                                    tender: prev.tender + 2,
                                }
                            } ) }

                        />
                        <Button
                            className="$10 py-5"
                            name="$10"
                            height="6"
                            bg="bg-warning"
                            onClick={ () => props.setBillingValues( ( prev ) => {
                                return {
                                    ...prev,
                                    tender: prev.tender + 10,
                                }
                            } ) }
                        />
                        <div>
                            <Button
                                className="opencashbox py-0 px-1 "
                                name="Open Cash Box"
                                height="3"
                                bg="bg-success"
                            />

                            <Button
                                className="terminatetransaction py-0 px-1"
                                name="Terminate Transaction"
                                height="3"
                                bg="bg-success"
                            />
                        </div>
                        <div>
                            <Button
                                className="goodsreturn py-0"
                                name="Goods Return"
                                height="3"
                                bg="bg-success"
                            />
                            <Button
                                className="print py-3 "
                                name="Print"
                                height="3"
                                bg="bg-success"
                            />
                        </div>
                        <div>
                            <Button
                                className="cancelitem py-4"
                                name="Cancel Item"
                                height="6"
                                bg="bg-success"
                            />
                        </div>
                        <Button
                            className="additem"
                            name="Add Item"
                            height="6"
                            bg="bg-success"
                        />


                    </div>
                    <div className="col-12 col-md-6 col-sm-12 d-flex " id='billrow'>
                        <Button
                            className="bill"
                            name='Bill'
                            height="6"
                            bg="bg-warning"
                            onClick={ props.setPayablePage }
                        />
                        <Button
                            className="$5"
                            name="$5"
                            height="6"
                            bg="bg-warning"
                            onClick={ () => props.setBillingValues( ( prev ) => {
                                return {
                                    ...prev,
                                    tender: prev.tender + 5,
                                }
                            } ) }
                        />
                        <Button
                            className="$50"
                            name="$50"
                            height="6"
                            bg="bg-warning"
                            onClick={ () => props.setBillingValues( ( prev ) => {
                                return {
                                    ...prev,
                                    tender: prev.tender + 50,
                                }
                            } ) }
                        />
                        <Button
                            className="giftvoucher"
                            name="Gift Voucher"
                            height="6"
                            bg="bg-warning"
                        />
                        <div >
                            <Button
                                className="reservedtransaction py-0"
                                name="Reserved Transaction"
                                height="3"
                                bg="bg-success"
                            />
                            <Button
                                className="restore py-2 px-4"
                                name="Restore"
                                height="3"
                                bg="bg-success"
                            />
                        </div>
                        <Button
                            className="deletealltransaction px-1"
                            name="Delete All Transaction"
                            height="6"
                            bg="bg-success"
                        /><Button
                            className="mainmenu"
                            name="Main Menu"
                            height="6"
                            bg="bg-success"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export { IIndRow };


export default function Button ( props ) {
    const navigate = useNavigate();
    const style = {
        width: "7em",
        height: `${props.height}em`,
    }
    let onClick = props.onClick ? props.onClick : () => {
        console.log( "this feature will enabling soon!" );
    }
    if ( props.className === 'mainmenu' ) {
        onClick = () => navigate( "/" );
    }
    return (
        <div>
            <button
                onClick={ onClick }
                className={ `btn btn-primary p-4 ${props.bg} text-light ${props.className}` }
                style={ style }>
                { props.className === "bill" && <i className=" fa-solid fa-play"></i> }
                { props.name }
            </button>
        </div>
    )
}
