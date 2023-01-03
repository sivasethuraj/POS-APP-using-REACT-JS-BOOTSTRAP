import React, { useState } from "react";
import { IIndRow } from "./IIndRow";
import { Istrow } from "./Istrow";

function Billing() {
  const [payablePage, setPayablePage] = useState(false);
  const [billingValues, setBillingValues] = useState({
    amount: 0,
    gstAmount: 0,
    payable: 0,
    tender: 0,
    change: 0,
  });
  const [wholeTotalPrice, setWholeTotalPrice] = useState(0);

  const handlePayablePage = () => {
    setPayablePage((prevPage) => {
      return !prevPage;
    });
    setBillingValues((prev) => {
      return {
        ...prev,
        amount: wholeTotalPrice,
      };
    });
  };

  const style = {
    maxWidth: "97.8vw",
  };

  return (
    <div className="billing" style={style}>
      <Istrow
        payablePage={payablePage}
        billingValues={billingValues}
        setBillingValues={setBillingValues}
        wholeTotalPrice={wholeTotalPrice}
        setWholeTotalPrice={setWholeTotalPrice}
        setPayablePage={setPayablePage}
      />
      <IIndRow
        setPayablePage={handlePayablePage}
        setBillingValues={setBillingValues}
      />
    </div>
  );
}

export default Billing;
