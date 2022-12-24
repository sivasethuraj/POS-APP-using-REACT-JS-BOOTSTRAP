import React, { useState } from "react";
import { IIndRow } from "./IIndRow";
import { Istrow } from "./Istrow";

function Billing() {
  const [payablePage, setPayablePage] = useState(false);

  const handlePayablePage = () => {
    setPayablePage((prevPage) => {
      return !prevPage;
    });
  };

  const style = {
    maxWidth: "97.8vw",
  };

  return (
    <div className="billing" style={style}>
      <Istrow payablePage={payablePage} />
      <IIndRow setPayablePage={handlePayablePage} />
    </div>
  );
}

export default Billing;
