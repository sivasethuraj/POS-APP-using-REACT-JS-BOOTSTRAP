import React from 'react'
import ImgTag from "./ImgTag";


function GalleryPage ( props ) {

    const overflow = {
        height: "80vh",
        overflow: 'auto',
    }
    const items = props.items;

    return (

        <div className="col-sm-12 col-md-5 mt-2  flex-row" id="list-items" style={ overflow }>

            {
                items.map( ( product ) => {
                    return <div
                        key={ product.id }
                        className="my-1 d-inline">

                        <ImgTag
                            classname='col-3 img-thumbnail rounded'
                            item={ product }
                            tableRows={ props.tableRows }
                            setTableRows={ props.setTableRows }
                            setWholeTotalPrice={ props.setWholeTotalPrice }
                        />

                    </div>

                } )

            }

        </div>
    )
}

export { GalleryPage };