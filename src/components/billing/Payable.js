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
            style={ style }>
            <div className="my-1">
                <input
                    className="form-control"
                    value={ `Change : $ ${change}` }
                    readOnly
                    type="text"
                />

                <div className="row my-1">
                    <span className="col-8 text-center">Amount</span>
                    <span className="col-4">
                        <input
                            readOnly
                            className="form-control"
                            type="text"
                            value={ `$ ${amount}` }
                        />
                    </span>
                </div>
                <div className="row my-1 ">
                    <span className="col-8 text-center">GST Amount </span>
                    <span className="col-4">
                        <input
                            className=" form-control "
                            type="text"
                            readOnly
                            value={ `$ ${gstAmount}` }
                        />
                    </span>
                </div>
                <hr />
                <div className="row my-1">
                    <span className="col-8 text-danger text-center">Payable</span>
                    <span className="col-4">
                        <input
                            type="text"
                            className="form-control"
                            readOnly
                            value={ `$ ${payable}` }
                        />
                    </span>
                </div>
                <hr />
                <div className="row my-1">
                    <span className="col-8 text-primary text-center">Tender</span>
                    <span className="col-4">
                        <input
                            className="form-control"
                            type="text"
                            readOnly
                            value={ `$ ${tender}` } />
                    </span>
                </div>
                <div className="row my-1">
                    <span className="col-8 text-primary text-center">Change</span>
                    <span className="col-4">
                        <input
                            className="form-control"
                            readOnly
                            type="text"
                            value={ `$ ${change}` }
                        />
                    </span>
                </div>
                <div className="row py-3 justify-content-center">
                    <button className="col-3 btn btn-outline-success text-center"
                        onClick={ () => {
                            if ( change < 1 ) {
                                alert( "please enter correct tender amount !" );
                                return;
                            }
                            console.log( props.setPayablePage );
                            // () => props.setPayablePage
                            props.setPayablePage( ( prev ) => {
                                return !prev;
                            } );
                            props.setBillingValues( {
                                amount: 0,
                                gstAmount: 0,
                                payable: 0,
                                tender: 0,
                                change: 0,
                            } );
                            props.setTableRows( [] );
                            localStorage.clear();
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