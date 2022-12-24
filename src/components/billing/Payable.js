import React from 'react'
function Payable () {

    const style = {
        height: "80vh",
        overflow: "auto",
    }
    return (
        <div className="col-sm-12 col-md-5"
            id="billpage"
            style={ style }
        >
            <div className="my-1">
                <input
                    className="form-control"
                    value="Change : "
                    id="change-input"
                    readOnly
                    type="text"
                />

                <div className="row my-1">
                    <span className="col-8 text-center">Amount</span>
                    <span className="col-4">
                        <input
                            id="amount"
                            readOnly
                            className="form-control"
                            type="number" />
                    </span>
                </div>
                <div className="row my-1 ">
                    <span className="col-8 text-center">GST Amount</span>
                    <span className="col-4">
                        <input
                            id="gstamount"
                            className=" form-control "
                            type="number" />
                    </span>
                </div>
                <hr />
                <div className="row my-1">
                    <span className="col-8 text-danger text-center">Payable</span>
                    <span className="col-4">
                        <input
                            type="number"
                            className="form-control"
                            readOnly
                            id="payable" />
                    </span>
                </div>
                <hr />
                <div className="row my-1">
                    <span className="col-8 text-primary text-center">Tender</span>
                    <span className="col-4">
                        <input
                            id="tender"
                            className="form-control"
                            type="number" />
                    </span>
                </div>
                <div className="row my-1">
                    <span className="col-8 text-primary text-center">Change</span>
                    <span className="col-4">
                        <input
                            className="form-control"
                            readOnly
                            id="change"
                            type="number" />
                    </span>
                </div>
                <div className="row py-3 justify-content-center">
                    <button className="col-3 btn btn-outline-success text-center btn-normal" id="goback-btn">
                        PAY
                    </button>
                </div>
            </div>
        </div>
    );
}
export { Payable };