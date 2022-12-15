import React from 'react'

function IIndRow () {
    const style = {
        height: "auto",
    }
    return (
        <div className="row" style={ style }>
            <div className="col-12 col-md-5 col-sm-12 leftside-bottom my-5" id="itemname">
                <div className="row text-center ">
                    <div className="col-3 col-md-3">
                        <label className="form-label text-primary" htmlFor="itemname">Item Name</label>
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
            <div className="col-12 col-md-7 col-sm-12 d-flex justify-content-center align-items-center rightside-bottom">
                <button className="btn btn-primary p-4 bg-warning text-black" id="bill-btn">
                    <i className="fa-solid fa-play"></i> Bill
                </button>
            </div>
        </div>
    )
}

export { IIndRow };