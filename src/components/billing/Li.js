import React from 'react'
import data from '../data';

function Li ( props ) {

    const setItems = props.onclick;
    const name = props.name;

    const handleItems = () => {
        let newItems = [];
        if ( name ) {
            newItems = data.filter( ( products ) => {
                return products.item === name;
            } );

            setItems( newItems );
        } else {
            setItems( data );
        }
    }
    return (

        <li className={ props.liclassname }>
            <button
                className={ props.aclassname }
                aria-current={ props.aria }
                onClick={ handleItems }
                id={ props.id }>
                { props.content }
            </button>
        </li>

    )
}

export default Li