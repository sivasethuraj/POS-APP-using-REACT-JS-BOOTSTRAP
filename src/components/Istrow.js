import React, { useState } from 'react'
import { UpperTablePage } from "./UpperTablePage";
import { NavigationMenu } from "./NavigationMenu";
import { GalleryPage } from './GalleryPage';
import data from "./data";


function Istrow () {

    const [ items, setItems ] = useState( data );
    const style = {
        height: "maxContent",
        backgroundColor: 'grey',
    }

    return (
        <div>
            <div className='row ' style={ style }>
                <UpperTablePage />
                <NavigationMenu setItems={ setItems } />
                <GalleryPage items={ items } />

            </div>
        </div>
    )
}
export { Istrow };