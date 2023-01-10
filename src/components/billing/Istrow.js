import React, { useState, useEffect } from 'react'
import { UpperTablePage } from "./UpperTablePage";
import { NavigationMenu } from "./NavigationMenu";
import { GalleryPage } from './GalleryPage';
import { Payable } from './Payable';
import data from "../data";


function Istrow ( props ) {

    const [ items, setItems ] = useState( data );
    const { tableRows, setTableRows } = props;
    const { wholeTotalPrice, setWholeTotalPrice } = props;
    const style = {
        height: "maxContent",
    }
    useEffect( () => {
        // console.log( 'tableRows:', tableRows )
    }, [ tableRows ] );
    return (
        <div>
            <div className='row ' style={ style }>
                {
                    props.payablePage ?
                        <Payable
                            billingValues={ props.billingValues }
                            setBillingValues={ props.setBillingValues }
                            setPayablePage={ props.setPayablePage }
                            setTableRows={ setTableRows }
                            setWholeTotalPrice={ setWholeTotalPrice }
                            tableRows={ tableRows }
                        />
                        : <UpperTablePage
                            tableRows={ tableRows }
                            setTableRows={ setTableRows }
                            wholeTotalPrice={ wholeTotalPrice }
                            setWholeTotalPrice={ setWholeTotalPrice }
                            setBillingValues={ props.setBillingValues }
                        />
                }
                <NavigationMenu
                    setItems={ setItems }
                />
                <GalleryPage
                    items={ items }
                    tableRows={ tableRows }
                    setTableRows={ setTableRows }
                    setWholeTotalPrice={ setWholeTotalPrice }
                />
            </div>
        </div>
    )
}
export { Istrow };