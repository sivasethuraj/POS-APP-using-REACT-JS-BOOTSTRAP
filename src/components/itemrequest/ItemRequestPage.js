import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import { Stack, Autocomplete, TextField } from '@mui/material'

const heightStyle = {
    minHeight: '70vh',
}

function ItemRequestPage () {

    const [ tableOfItems, setTableOfItems ] = useState( [] );
    const [ newItem, setNewItem ] = useState( {
        name: '',
        quantity: 0,
        date: '',
    } );
    const updaterFunctions = () => {
        const inventoryArray = JSON.parse( localStorage.getItem( 'inventory' ) );
        return inventoryArray;
    }
    const options = updaterFunctions().map( ( items ) => {
        return items.name;
    } )
    // console.log( options );
    useEffect( () => {
        const existingArray = JSON.parse( localStorage.getItem( 'itemRequest' ) );
        if ( existingArray && existingArray.length > 0 ) {

            setTableOfItems( [
                ...existingArray, ]
            );
        }
    }, [] );
    const style = {
        minHeight: '100vh',
    }
    const resetValues = () => {
        setNewItem( {
            name: '',
            quantity: 0,
            date: '',
        } )
    }
    // 
    const handleTableOfItems = () => {

        const { name, quantity, date } = newItem;
        if (
            name === "" ||
            quantity === "" ||
            quantity <= 0 || date === ''
        ) {
            alert( "Please Enter All Fields Correctly !" );
            return;
        }
        if ( new Date( date ) < new Date() ) {
            alert( 'Enter valid expected date !' );
            return
        }

        const inventoryArray = updaterFunctions();
        if ( inventoryArray ) {
            let newRequestItem = inventoryArray.find( ( item ) => {
                if ( item.name === newItem.name ) {
                    const newRequestObject = {
                        name: item.name,
                        quantity: parseInt( newItem.quantity ),
                        date: newItem.date,
                        inventoryQuantity: item.purchaseQuantity + parseInt( newItem.quantity ),
                        id: item.id,
                    }
                    console.log( "newRequestObject", newRequestObject );

                    localStorage.setItem( 'itemRequest', JSON.stringify( [ ...tableOfItems, {
                        ...newRequestObject,
                    } ] ) );
                    setTableOfItems( ( prev ) => {
                        return [ ...prev, {
                            ...newRequestObject,
                        } ]
                    } );
                }
            } );

            resetValues();
            return;
        }

        const newTableOfItem = {
            name: name, quantity: quantity, date: date
        };
        localStorage.setItem(
            "itemRequest2",
            JSON.stringify( [
                ...tableOfItems,
                {
                    ...newTableOfItem,
                },
            ] )
        );
        setTableOfItems( ( prev ) => [
            ...prev,
            {
                ...newTableOfItem,
            },
        ] );

        resetValues();
    };

    const handleSubmit = () => {

        if ( tableOfItems.length <= 0 ) {
            alert( 'Add any request items !' );
            return
        }
        const inventoryArray = updaterFunctions();
        tableOfItems.map( ( requestItems ) => {
            inventoryArray.map( ( inventoryItems ) => {
                if ( requestItems.id === inventoryItems.id ) {
                    const newInventoryItem = {
                        ...inventoryItems,
                        purchaseQuantity: parseInt( requestItems.inventoryQuantity ),
                    };
                    // ! after testing localstorage id changed to inventory
                    let localStorageInventoryArray = JSON.parse( localStorage.getItem( "demoInventory" ) );

                    const newTableOfItem = localStorageInventoryArray.filter( ( item ) => item.id !== inventoryItems.id );

                    localStorage.setItem(
                        "demoInventory",
                        JSON.stringify( [
                            ...newTableOfItem,
                            {
                                ...newInventoryItem,
                            },
                        ] )
                    );
                }
            } );
        } );
        setTableOfItems( [] );
        localStorage.setItem( 'itemRequest', JSON.stringify( [] ) );
        resetValues();
    }
    // 
    return (
        <div style={ style }>
            <div className="container" >
                <div style={ heightStyle }>
                    <div className="row ">
                        <div style={ { position: "absolute", left: "2rem", top: "1rem" } }>
                            <Link to="/">
                                <i
                                    className="fa fa-home text-light bg-primary p-2 border border-dark rounded "
                                    aria-hidden="true"
                                    style={ { cursor: "pointer" } }
                                ></i>
                            </Link>
                        </div>
                        <div className="col text-center">
                            <h3>Item Request</h3>
                        </div>
                    </div>

                    <div className="row">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Expected Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableOfItems && tableOfItems.map( ( item, index ) => {
                                        return ( <tr key={ index }>
                                            <td>{ index }</td>
                                            <td>{ item.name }</td>
                                            <td>{ item.quantity }</td>
                                            <td>{ item.date }</td>
                                        </tr> )
                                    } )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row d-flex justify-content-end">
                    <button
                        className='col-2 col-md-1 btn btn-primary mx-3' type='reset'
                        onClick={ () => {
                            localStorage.setItem( 'itemRequest', JSON.stringify( [] ) );
                            setTableOfItems( [] );
                        } }>Reset</button>
                    <button className='col-2 btn btn-primary col-md-1' type='submit'
                        onClick={ () => handleSubmit() }>Submit</button>
                </div>
                <div className="row mt-3">
                    <div className="col-4 d-flex">
                        <label className="form-group col-4 text-center mt-2"
                        >Item Name</label>
                        <Stack className='form-group col-8' spacing={ 2 }>
                            <Autocomplete
                                value={ ( newItem.name ) && newItem.name }
                                onChange={ ( event, newInputValue ) => {
                                    console.log( 'newInputValue', newInputValue )
                                    setNewItem( ( prev ) => {
                                        return {
                                            ...prev,
                                            name: newInputValue,
                                        }
                                    } );
                                } }
                                options={ options }
                                renderInput={ ( params ) => <TextField { ...params } label="name"
                                    id="filled-hidden-label-small"
                                    variant="filled"
                                    size="small" /> } />
                        </Stack>
                    </div><div className="col-3">
                        <label className="form-group col-4" htmlFor="itemquantity">Quantity</label>
                        <input className="form-group col-8 py-2" type="number" id="itemquantity"
                            value={ newItem.quantity } onChange={ ( e ) => {
                                if ( e.target.value ) {
                                    setNewItem( ( prev ) => {
                                        return {
                                            ...prev,
                                            quantity: parseInt( e.target.value ),
                                        }
                                    } )
                                }
                            } } />
                    </div><div className="col-3">
                        <label className="form-group col-5" htmlFor="itemdate">Expected Date</label>
                        <input className="form-group col-7 py-2" id="itemdate" type="date"
                            value={ newItem.date } onChange={ ( e ) => {
                                if ( e.target.value ) {
                                    setNewItem( ( prev ) => {
                                        return {
                                            ...prev,
                                            date: e.target.value,
                                        }
                                    } )
                                }
                            } } /></div>
                    <div className="ms-1 col-1 px-0">
                        <button className='btn btn-primary col-10' onClick={ () => {
                            handleTableOfItems();
                        } }>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemRequestPage