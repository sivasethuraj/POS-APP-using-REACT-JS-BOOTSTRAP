import React from 'react'

function ImgTag ( props ) {
    const style = {
        height: '20vh',
    }
    return (
        <>
            <img
                style={ style }
                className={ props.classname }
                id={ props.id }
                src={ `../../images/${props.name}.jfif` }
                alt={ props.name }
                onClick={ props.onClick }
            />
        </>
    )
}

export default ImgTag