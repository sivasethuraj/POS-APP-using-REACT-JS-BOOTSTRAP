import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./buttonstyle.css"

import { Autocomplete, TextField } from '@mui/material'

function IIndRow ( props ) {

    const { tableRows, setTableRows } = props;
    const style = {
        height: "auto",
        width: "100%",
    }
    const [ isValid, setIsValid ] = useState( false );
    const [ itemId, setItemid ] = useState( {
        iName: '',
        iPrice: 0,
        iQuantity: 0,
    } );
    const idOptions = () => {
        const inventoryArray = JSON.parse( localStorage.getItem( "inventory" ) );
        if ( inventoryArray ) {
            return inventoryArray.map( ( item ) => item.name );
        } else return false;

    }
    const options = idOptions();

    const specifiedObject = ( userPressedId ) => {
        const inventoryArray = JSON.parse( localStorage.getItem( "inventory" ) );
        if ( inventoryArray ) {
            const newTableRow = inventoryArray.filter( ( item ) => item.name === userPressedId );

            if ( newTableRow.length > 0 ) {
                return newTableRow[ 0 ];
            }
        }
        return false;
    }

    const handleIdChange = ( userPressedId ) => {

        const response = specifiedObject( userPressedId );

        if ( response ) {
            console.log( 'valid id' );
            setItemid( ( prev ) => {
                return {
                    ...prev,
                    iPrice: response.price,
                }
            } );
        } else {
            alert( 'invalid id' );
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
        const response = specifiedObject( itemId.iName );

        if ( response ) {
            response.inStock > userQuantity ? setIsValid( true ) : setIsValid( false );
        }
        // console.log( 'validStock', isValid )
    }
    const changeTableData = () => {

        if ( isValid ) {
            const response = specifiedObject( itemId.iName );

            if ( response ) {
                // console.log( "inner" )
                const { id, name, price } = response;
                let newProduct = {};
                const existingItem = tableRows.find( ( item ) => item.name === itemId.iName );

                if ( existingItem ) {
                    const newTableRows = tableRows.map( ( item ) => {

                        if ( item.name === itemId.iName ) {
                            return {
                                ...item,
                                quantity: ( item.quantity + itemId.iQuantity ),
                                totalPrice: ( ( item.quantity + itemId.iQuantity ) * item.unitPrice ),
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
            setItemid( {
                iName: '',
                iPrice: 0,
                iQuantity: 0,
            } );
        } else {
            // console.log( "outer" )
            setItemid( {
                iName: '',
                iPrice: 0,
                iQuantity: 0,
            } );
            alert( 'out of stock !' );
        }
    }
    let pointer = useRef();

    const handleCalculatorValues = ( ref, value ) => {
        if ( !ref ) return;
        // if ( ref === "id" ) {
        //     handleIdChange( itemId.iName ) ;
        //     setItemid( ( prev ) => {
        //         return {
        //             ...prev,
        //             iId: parseInt( prev.iId + value ),
        //         };
        //     } );
        // }
        if ( ref === "quantity" ) {
            quantityCheck( parseInt( itemId.iQuantity + value ) )
        }
    }

    return (
        <>
            <div className="row " style={ style }>
                <div className="col-12 col-md-5 col-sm-12 ps-4 mt-3">
                    <div className="row text-center ">
                        <div className="col-3 col-md-3">
                            <label className="form-label text-primary bg-light px-3 rounded" htmlFor="itemname">Item Name</label>
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
                            {/*  */ }
                            <div>
                                <Autocomplete
                                    value={ itemId.iName ? itemId.iName : options[ 0 ] }
                                    onChange={ ( e, newValue ) => {
                                        handleIdChange( newValue );
                                        setItemid( ( prev ) => {
                                            return {
                                                ...prev,
                                                iName: newValue,
                                            };
                                        } )
                                    } }
                                    onFocus={ () => pointer.current = 'id' }
                                    id="controllable-states-demo"
                                    options={ options ? options : [ 'no values' ] }
                                    renderInput={ ( params ) => <TextField { ...params }
                                        id="filled-hidden-label-small"
                                        variant="filled"
                                        size="small" /> }
                                />
                            </div>
                            {/*  */ }
                            {/* <input className="form-control" type="number" value={ itemId.iId } onChange={ ( e ) => {
                                handleIdChange( parseInt( e.target.value ) );
                                setItemid( ( prev ) => {
                                    return {
                                        ...prev,
                                        iId: parseInt( e.target.value ) || 0,
                                    };
                                } )
                            } }
                                onFocus={ () => pointer.current = 'id' } /> */}
                        </div>
                        <div className="col-3 col-md-3">
                            <input className="form-control" type="number" readOnly id="itemprice" value={ itemId.iPrice } />
                        </div>
                        <div className="col-3 col-md-3">
                            <input className="form-control" type="number" id="itemquantity" value={ itemId.iQuantity }
                                onChange={ ( e ) => {
                                    quantityCheck( parseInt( e.target.value ) )
                                } }
                                onFocus={ () => pointer.current = 'quantity' }
                            />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" id="addbtn"
                                onClick={ changeTableData }>Add</button>
                        </div>
                    </div>
                    <div className="row d-flex p-2">
                        <div className="col ms-5">
                            <div className="row mb-1">
                                <button className='btn btn-primary col-2 mx-1'
                                    onClick={ () => handleCalculatorValues( pointer.current, '7' ) }>7</button>
                                <button className='btn btn-primary col-2 mx-1'
                                    onClick={ () => handleCalculatorValues( pointer.current, '8' ) }>8</button>
                                <button className='btn btn-primary col-2 mx-1'
                                    onClick={ () => handleCalculatorValues( pointer.current, '9' ) }>9</button>
                            </div>
                            <div className="row mb-1">
                                <button className='btn btn-primary col-2 mx-1'
                                    onClick={ () => handleCalculatorValues( pointer.current, '4' ) }>4</button>
                                <button className='btn btn-primary col-2 mx-1'
                                    onClick={ () => handleCalculatorValues( pointer.current, '5' ) }>5</button>
                                <button className='btn btn-primary col-2 mx-1'
                                    onClick={ () => handleCalculatorValues( pointer.current, '6' ) }>6</button>
                            </div>
                            <div className="row mb-1">
                                <button className='btn btn-primary col-2 mx-1' onClick={ () => handleCalculatorValues( pointer.current, '1' ) }>1</button>
                                <button className='btn btn-primary col-2 mx-1' onClick={ () => handleCalculatorValues( pointer.current, '2' ) }>2</button>
                                <button className='btn btn-primary col-2 mx-1' onClick={ () => handleCalculatorValues( pointer.current, '3' ) }>3</button>
                            </div>
                            <div className="row">
                                <button className='btn btn-primary col-2 mx-1' onClick={ () => handleCalculatorValues( pointer.current, '0' ) }>0</button>
                                <button className='btn btn-primary col-2 mx-1'>.</button>
                                <button className='btn btn-primary col-2 mx-1'>-</button>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className="row">
                                <button className="btn btn-primary m-1 py-4 px-2 text-center col-6" onClick={ () => {
                                    setItemid( {
                                        iId: 0,
                                        iPrice: 0,
                                        iQuantity: 0,
                                    } )
                                } }>AC</button>
                            </div>
                            <div className="row">
                                <button className="btn btn-primary m-1 py-4 px-2 text-center col-6" onClick={ () => {

                                    if ( pointer && pointer.current === 'id' ) {
                                        let id = String( itemId.iId );
                                        if ( id.length > 1 ) {
                                            id = id.slice( 0, -1 )

                                            setItemid( ( prev ) => {
                                                return {
                                                    ...prev,
                                                    iId: parseInt( id ),
                                                }
                                            } )
                                        } else {
                                            setItemid( ( prev ) => {
                                                return {
                                                    ...prev,
                                                    iId: 0,
                                                }
                                            } )
                                        }

                                    }
                                    if ( pointer && pointer.current === 'quantity' ) {
                                        let quantity = String( itemId.iQuantity );

                                        if ( quantity.length > 1 ) {
                                            quantity = quantity.slice( 0, -1 );
                                            setItemid( ( prev ) => {
                                                return {
                                                    ...prev,
                                                    iQuantity: parseInt( quantity ),
                                                }
                                            } )
                                        } else {

                                            setItemid( ( prev ) => {
                                                return {
                                                    ...prev,
                                                    iQuantity: 0,
                                                }
                                            } )
                                        }
                                    }
                                } }>Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7 col-sm-12 mt-5 p-0">
                    <div className="col-12 col-sm-12 d-flex mt-3">
                        <div className="d-flex flex-column">
                            <Button
                                className="newbill py-3"
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
                                onClick={ () => {
                                    if ( tableRows.length > 0 ) {
                                        const printContents = document.getElementById( "tablepage" ).innerHTML;
                                        const originalContents = document.body.innerHTML;
                                        document.body.innerHTML = printContents;
                                        window.print();
                                        document.body.innerHTML = originalContents;
                                    } else {
                                        alert( 'add items for billing !' );
                                    }
                                } }
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
                    <div className="col-12 col-md-6 col-sm-12 d-flex" id='billrow'>
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
                                className="restore py-0 px-4"
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
