import React, { useState } from 'react'
import { UpperTablePage } from "./UpperTablePage";
import { NavigationMenu } from "./NavigationMenu";
import { GalleryPage } from './GalleryPage';
import data from "../data";


function Istrow () {

    const [ items, setItems ] = useState( data );
    const [ tableRows, setTableRows ] = useState( [] );
    const style = {
        height: "maxContent",
        backgroundColor: 'grey',
    }

    return (
        <div>
            <div className='row ' style={ style }>

                <UpperTablePage
                    tableRows={ tableRows }
                    setTableRows={ setTableRows }
                />
                <NavigationMenu
                    setItems={ setItems }
                />
                <GalleryPage
                    items={ items }
                    setTableRows={ setTableRows }
                />

            </div>
        </div>
    )
}
export { Istrow };