import React from "react";
import { IIndRow } from "./IIndRow";
import { Istrow } from "./Istrow";

function Billing() {
  const style = {
    maxWidth: "97.8vw",
  };
  return (
    <div className="billing" style={style}>
      <Istrow />
      <IIndRow />
    </div>
  );
}

export default Billing;
