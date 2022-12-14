import React from 'react';
import { useNavigate } from "react-router-dom";

function Box ( props ) {

    const style = {
        padding: '5rem',
        width: '25rem',
        display: 'inline-block',
        margin: '1rem',
        cursor: 'pointer',
        textAlign: "center"
    };
    const navigate = useNavigate();
    return (
        <div
            className={ props.classname + ' bg-primary text-light' }
            style={ style }

        >
            <h1>{ props.content }</h1>
        </div >

    );
}
export { Box };