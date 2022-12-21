import React from 'react'
import "./buttonstyle.css"
function IIndRow () {
    const style = {
        height: "auto",
        width: "100 %",
    }

    return (
        <>
            <div className="row" style={ style }>
                <div className="col-12 col-md-5 col-sm-12 my-3" id="itemname">
                    <div className="row text-center ">
                        <div className="col-3 col-md-3">
                            <label className="form-label text-primary" htmlFor="itemname">Item Id</label>
                        </div>
                        <div className="col-3 col-md-3">
                            <label className="form-label text-primary" htmlFor="itemprice">Item Price</label>
                        </div>
                        <div className="col-3 col-md-3">
                            <label className="form-label text-primary" htmlFor="itemquantity">
                                Quantity</label>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3 col-md-3">
                            <input className="form-control" type="text" id="extraitemname" />
                        </div>
                        <div className="col-3 col-md-3">
                            <input className="form-control" type="number" id="itemprice" />
                        </div>
                        <div className="col-3 col-md-3">
                            <input className="form-control" type="number" id="itemquantity" />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" id="addbtn">Add</button>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7 col-sm-12 my-5">
                    <div className="col-12 col-md-6 col-sm-12  d-flex">
                        <div className="d-flex flex-column">
                            <Button
                                className="newbill  py-3"
                                name="New Bill"
                                height="3"
                                bg="bg-warning"
                            />
                            <Button
                                className="priceamendment px-1 py-0"
                                name="Price Amendment"
                                height="3"
                                bg="bg-warning"
                            />
                        </div>
                        <Button
                            className="$2 py-5"
                            name="$2"
                            height="6"
                            bg="bg-warning"
                        />
                        <Button
                            className="$10 py-5"
                            name="$10"
                            height="6"
                            bg="bg-warning"
                        />
                        <div>
                            <Button
                                className="opencashbox py-0 px-1 "
                                name="Open Cash Box"
                                height="3"
                                bg="bg-success"
                            />

                            <Button
                                className="terminatetransaction py-0 px-1"
                                name="Terminate Transaction"
                                height="3"
                                bg="bg-success"
                            />
                        </div>
                        <div>
                            <Button
                                className="goodsreturn py-0"
                                name="Goods Return"
                                height="3"
                                bg="bg-success"
                            />
                            <Button
                                className="print py-3 "
                                name="Print"
                                height="3"
                                bg="bg-success"
                            />
                        </div>
                        <div>
                            <Button
                                className="cancelitem py-4"
                                name="Cancel Item"
                                height="6"
                                bg="bg-success"
                            />
                        </div>
                        <Button
                            className="additem"
                            name="Add Item"
                            height="6"
                            bg="bg-success"
                        />


                    </div>
                    <div className="col-12 col-md-6 col-sm-12 d-flex " id='billrow'>
                        <Button
                            className="bill"
                            name='Bill'
                            height="6"
                            bg="bg-warning"
                        />
                        <Button
                            className="$5"
                            name="$5"
                            height="6"
                            bg="bg-warning"
                        />
                        <Button
                            className="$50"
                            name="$50"
                            height="6"
                            bg="bg-warning"
                        />
                        <Button
                            className="giftvoucher"
                            name="Gift Voucher"
                            height="6"
                            bg="bg-warning"
                        />
                        <div >
                            <Button
                                className="reservedtransaction py-0"
                                name="Reserved Transaction"
                                height="3"
                                bg="bg-success"
                            />
                            <Button
                                className="restore py-2 px-4"
                                name="Restore"
                                height="3"
                                bg="bg-success"
                            />
                        </div>
                        <Button
                            className="deletealltransaction px-1"
                            name="Delete All Transaction"
                            height="6"
                            bg="bg-success"
                        /><Button
                            className="mainmenu"
                            name="Main Menu"
                            height="6"
                            bg="bg-success"
                        />
                    </div>
                </div>
            </div>
        </>
    );
    // < button className = "btn btn-primary p-4 bg-warning text-black" id = "bill-btn" >
    //     <i className="fa-solid fa-play"></i> Bill
    //         </ >
}

export { IIndRow };


export default function Button ( props ) {
    const style = {
        width: "7em",
        height: `${props.height}em`
    }

    return (
        <div>
            <button className={ `btn btn-primary p-4 
            ${props.bg} text-light ${props.className}` } style={ style }>
                { props.className === "bill" && <i className=" fa-solid fa-play"></i> }
                { props.name }
            </button>
        </div>
    )
}
