import React, { useState, useEffect } from 'react'

function ImgTag ( props ) {

    const [ product, setProduct ] = useState( props.item )
    const { id, name } = product;

    const style = {
        height: '20vh',
        cursor: "pointer",
    };

    const setTableRows = props.setTableRows;

    const handleClick = () => {

        if ( localStorage.hasOwnProperty( id ) ) {
            let existingProduct = localStorage.getItem( id );
            console.log( existingProduct );
            const newProduct = {
                ...existingProduct,
                quantity: ( existingProduct.quantity + 1 ),
                totalPrice: ( ( existingProduct.quantity + 1 ) * existingProduct.unitPrice ),
            };
            localStorage.setItem( `${id}`, JSON.stringify( newProduct ) );
            console.log( newProduct );

        } else {
            const newProduct = {
                ...product,
                "quantity": ( product.quantity + 1 ),
                "totalPrice": ( ( product.quantity + 1 ) * product.unitPrice ),
            };
            localStorage.setItem( `${id}`, JSON.stringify( newProduct ) );
            console.log( newProduct );
        }

        let newTableRow = [];
        for ( const key in localStorage ) {

            if ( localStorage.hasOwnProperty( key ) ) {

                let object = JSON.parse( localStorage.getItem( key ) );
                newTableRow.unshift( object );

                console.log( "object ", object )
                console.log( "newTableRow : ", newTableRow );
            }
        }
        setTableRows( () => newTableRow );
    }
    useEffect( () => {

        let newTableRow = [];
        for ( const key in localStorage ) {

            if ( localStorage.hasOwnProperty( key ) ) {

                let object = JSON.parse( localStorage.getItem( key ) );
                newTableRow.unshift( object );
            }
        }
        setTableRows( () => newTableRow );
    }, [] );

    return (
        <>
            <img
                loading="lazy"
                style={ style }
                className={ props.classname }
                id={ id }
                src={ `../../images/${name}.jfif` }
                alt={ name }
                onClick={ handleClick }
            />
        </>
    )
}

export default ImgTag;