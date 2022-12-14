import React from 'react'

function Li ( props ) {
    return (

        <li className={ props.liclassname }>
            <button
                className={ props.aclassname }
                aria-current={ props.aria }
                onClick={ props.onclick }
                id={ props.id }>
                { props.content }
            </button>
        </li>

    )
}

export default Li