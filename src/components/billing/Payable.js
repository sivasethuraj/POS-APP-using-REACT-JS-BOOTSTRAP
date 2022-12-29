import React from 'react'
function Payable ( props ) {

    const style = {
        height: "80vh",
        overflow: "auto",
    }

    let { amount, gstAmount, payable, tender, change } = props.billingValues;

    gstAmount = parseFloat( amount * 0.18 ).toFixed( 2 );
    payable = ( parseFloat( amount ) + parseFloat( gstAmount ) ).toFixed( 2 );
    change = ( parseFloat( tender ) - parseFloat( payable ) ).toFixed( 2 );

    return (
        <div className="col-sm-12 col-md-5"
            id="billpage"
            style={ style }
        >
            <div className="my-1">
                <input
                    className="form-control"
                    value={ `Change : ${change}` }
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
                            type="number"
                            value={ amount }
                        />
                    </span>
                </div>
                <div className="row my-1 ">
                    <span className="col-8 text-center">GST Amount</span>
                    <span className="col-4">
                        <input
                            id="gstamount"
                            className=" form-control "
                            type="number"
                            readOnly
                            value={ gstAmount }
                        />
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
                            id="payable"
                            value={ payable }
                        />
                    </span>
                </div>
                <hr />
                <div className="row my-1">
                    <span className="col-8 text-primary text-center">Tender</span>
                    <span className="col-4">
                        <input
                            id="tender"
                            className="form-control"
                            type="number"
                            readOnly
                            value={ tender } />
                    </span>
                </div>
                <div className="row my-1">
                    <span className="col-8 text-primary text-center">Change</span>
                    <span className="col-4">
                        <input
                            className="form-control"
                            readOnly
                            id="change"
                            type="number"
                            value={ change }
                        />
                    </span>
                </div>
                <div className="row py-3 justify-content-center">
                    <button className="col-3 btn btn-outline-success text-center btn-normal" id="goback-btn"
                        onClick={ () => {
                            alert( "Successfully Paid!" );
                        } }>
                        PAY
                    </button>
                </div>
            </div>
        </div>
    );
}
export { Payable };