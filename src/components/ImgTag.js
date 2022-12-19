import React, { useState, useEffect } from 'react'
import { Tl } from "./UpperTablePage"
function ImgTag ( props ) {

    const [ product, setProduct ] = useState( props.item )
    const { id, name, unitPrice, totalPrice } = product;

    const style = {
        height: '20vh',
        cursor: "pointer",
    };

    const setTableRows = props.setTableRows;

    const handleClick = () => {

        const newProduct = {
            ...product,
            "quantity": ( product.quantity + 1 ),
            "totalPrice": ( ( product.quantity + 1 ) * product.unitPrice ),
        };
        console.log( newProduct );
        localStorage.setItem( `${product.id}`, JSON.stringify( newProduct ) );
        setProduct( newProduct
            // ( prevProduct ) => {
            // return {
            //     ...prevProduct,
            //     "quantity": ( prevProduct.quantity + 1 ),
            //     "totalPrice": ( ( prevProduct.quantity + 1 ) * prevProduct.unitPrice ),
            // }
            // }
        );

        // <Tl item={ newProduct } />

        const newTableRows = [];
        newTableRows.unshift(
            {
                name: newProduct.name,
                quantity: newProduct.quantity,
                unitPrice: newProduct.unitPrice,
                totalPrice: newProduct.totalPrice,
            } );

        setTableRows( () => [ ...newTableRows ] );
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
                onClick={ handleClick }
            />
        </>
    )
}

export default ImgTag;