import React, { useState } from 'react'

function ImgTag ( props ) {

    const [ product ] = useState( props.item )
    const { id, name } = product;
    const { tableRows, setTableRows } = props;

    const style = {
        height: '20vh',
        cursor: "pointer",
    };


    // const updaterFunction = () => {
    //     let newTableRow = [];
    //     for ( const key in localStorage ) {

    //         if ( localStorage.hasOwnProperty( key ) ) {

    //             let object = JSON.parse( localStorage.getItem( key ) );
    //             newTableRow.unshift( object );
    //             totalPrice += object.totalPrice;

    //         }
    //     }
    //     setTableRows( () => newTableRow );
    //     setWholeTotalPrice( totalPrice );
    // }

    const handleClick = ( clickedItemId ) => {
        let newProduct = {};
        const existingItem = tableRows.find( ( item ) => item.id === clickedItemId );
        if ( existingItem ) {

            const newTableRows = tableRows.map( ( item ) => {
                if ( item.id === clickedItemId ) {
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
                ...product,
                "quantity": ( product.quantity + 1 ),
                "totalPrice": ( ( product.quantity + 1 ) * product.unitPrice ),
            }
            setTableRows( ( prev ) => [ ...prev, { ...newProduct } ] );
        }
    }
    return (
        <>
            <img
                loading="lazy"
                style={ style }
                className={ props.classname }
                id={ id }
                src={ `../../images/${name}.jfif` }
                alt={ name }
                onClick={ () => handleClick( id ) }
            />
        </>
    )
}

export default ImgTag;
{
    // import React, { useState, useEffect } from 'react'

    // function ImgTag ( props ) {

    //     const [ product, setProduct ] = useState( props.item )
    //     const { id, name } = product;
    //     const setWholeTotalPrice = props.setWholeTotalPrice;

    //     const style = {
    //         height: '20vh',
    //         cursor: "pointer",
    //     };

    //     const setTableRows = props.setTableRows;
    //     let totalPrice = 0;

    //     const updaterFunction = () => {
    //         let newTableRow = [];
    //         for ( const key in localStorage ) {

    //             if ( localStorage.hasOwnProperty( key ) ) {

    //                 let object = JSON.parse( localStorage.getItem( key ) );
    //                 newTableRow.unshift( object );
    //                 totalPrice += object.totalPrice;

    //             }
    //         }
    //         setTableRows( () => newTableRow );
    //         setWholeTotalPrice( totalPrice );
    //     }

    //     const handleClick = () => {

    //         if ( localStorage.hasOwnProperty( id ) ) {
    //             let existingProduct = JSON.parse( localStorage.getItem( id ) );

    //             const newProduct = {
    //                 ...existingProduct,
    //                 quantity: ( existingProduct.quantity + 1 ),
    //                 totalPrice: ( ( existingProduct.quantity + 1 ) * existingProduct.unitPrice ),
    //             };
    //             localStorage.setItem( `${id}`, JSON.stringify( newProduct ) );

    //         } else {
    //             const newProduct = {
    //                 ...product,
    //                 "quantity": ( product.quantity + 1 ),
    //                 "totalPrice": ( ( product.quantity + 1 ) * product.unitPrice ),
    //             };
    //             localStorage.setItem( `${id}`, JSON.stringify( newProduct ) );

    //         }
    //         updaterFunction();
    //     }
    //     useEffect( () => {

    //         updaterFunction();
    //     }, [] );

    //     return (
    //         <>
    //             <img
    //                 loading="lazy"
    //                 style={ style }
    //                 className={ props.classname }
    //                 id={ id }
    //                 src={ `../../images/${name}.jfif` }
    //                 alt={ name }
    //                 onClick={ handleClick }
    //             />
    //         </>
    //     )
    // }

    // export default ImgTag;
}