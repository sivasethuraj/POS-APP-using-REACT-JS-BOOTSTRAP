import React from "react";
import { Link } from "react-router-dom";

function Inventory() {
  const heightStyle = {
    minHeight: "84vh",
  };

  let tr = [];
  // function addRows() {
  //   for (const key in localStorage) {
  //     let sno = 1;
  //     const object = JSON.parse(localStorage.getItem(key));

  //     if (localStorage.hasOwnProperty(key)) {
  //       tr.push(
  //         <tr>
  //           <td>{sno}</td>
  //           <td>{object.name}</td>
  //           <td>{object.soldQuantity}</td>
  //           <td>
  //             {parseFloat(object.price) * parseFloat(object.soldQuantity)}
  //           </td>
  //         </tr>
  //       );
  //       sno = sno + 1;
  //     }
  //   }
  // }

  return (
    <div className="container">
      <div>
        <div className="row ">
          <div className="col-3 ">
            <Link to="/">
              <i
                className="fa fa-home text-light bg-primary p-2 border border-dark rounded "
                aria-hidden="true"
                style={{ cursor: "pointer" }}
              ></i>
            </Link>
          </div>
          <div className="col ">
            <h3>Inventory</h3>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <label className="col-2 text-end" htmlFor="filter">
            Filter By :
          </label>
          <select className="col-2" name="day" id="filter">
            <option value="">--Select--</option>
            <option value="">Today</option>
            <option value="">Yesterday</option>
            <option value="">This Week</option>
            <option value="">Last Week</option>
            <option value="">This Month</option>
            <option value="">Last Month</option>
            <option value="">Custom</option>
          </select>
          <label className="col-2 text-end" htmlFor="from">
            From
          </label>
          <input className="col-2" type="date" id="from" />
          <label className="col-2 text-end" htmlFor="To">
            To
          </label>
          <input className="col-2" type="date" id="To" />
        </div>
        <div style={heightStyle} className="row mt-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Item Name</th>
                <th scope="col">Price</th>
                <th scope="col">Purchase</th>
                <th scope="col">Sold</th>
              </tr>
            </thead>
            <tbody>{tr}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Inventory;
