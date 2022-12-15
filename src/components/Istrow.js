import React from 'react'
import { UpperTablePage } from "./UpperTablePage";
import { NavigationMenu } from "./NavigationMenu";
import { GalleryPage } from './GalleryPage';



function Istrow () {

    const style = {
        height: "maxContent",
        backgroundColor: 'grey',
    }

    return (
        <div>
            <div className='row ' style={ style }>
                <UpperTablePage />
                <NavigationMenu />
                <GalleryPage />

            </div>
        </div>
    )
}
export { Istrow };