import React, { useState } from "react";
import { Link } from "react-router-dom";

function Inventory() {
  const [newItem, setNewItem] = useState({
    name: "",
    id: "",
    price: 0,
    purchaseQuantity: 0,
    sold: 0,
    inStock: 0,
  });
  const [tableOfItems, setTableOfItems] = useState([]);
  const resetValues = () => {
    setNewItem({
      name: "",
      id: "",
      price: 0,
      purchaseQuantity: 0,
      sold: 0,
      inStock: 0,
    });
  };
  const handleTableOfItems = () => {
    const { name, id, purchaseQuantity, price } = newItem;
    if (
      name === "" ||
      id === "" ||
      purchaseQuantity === "" ||
      purchaseQuantity <= 0 ||
      price === "" ||
      price <= 0
    ) {
      alert("Please Enter All Fields Correctly !");
      return;
    }
    setTableOfItems((prev) => [
      ...prev,
      {
        ...newItem,
      },
    ]);
    resetValues();
    console.log(tableOfItems);
  };
  const heightStyle = {
    minHeight: "100vh",
  };
  return (
    <div className="container" style={heightStyle}>
      {/* modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row my-2">
                <div className="col-3">
                  <label htmlFor="name" className="form-label">
                    Item Name
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    id="name"
                    autoComplete="off"
                    className="form-control"
                    value={newItem.name}
                    onChange={(e) => {
                      setNewItem({
                        ...newItem,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div className="row my-2">
                <div className="col-3">
                  <label htmlFor="id" className="form-label">
                    Item Id
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="text"
                    id="id"
                    autoComplete="off"
                    className="form-control"
                    value={newItem.id}
                    onChange={(e) => {
                      setNewItem({
                        ...newItem,
                        id: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>

              <div className="row my-2">
                <div className="col-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="number"
                    autoComplete="off"
                    id="price"
                    className="form-control"
                    value={parseInt(newItem.price)}
                    onChange={(e) => {
                      setNewItem({
                        ...newItem,
                        price: parseInt(e.target.value),
                      });
                    }}
                  />
                </div>
              </div>

              <div className="row my-2">
                <div className="col-3">
                  <label htmlFor="address" className="form-label">
                    Purchase Quantity
                  </label>
                </div>
                <div className="col-9">
                  <input
                    type="number"
                    autoComplete="off"
                    id="address"
                    className="form-control"
                    value={parseInt(newItem.purchaseQuantity)}
                    onChange={(e) => {
                      setNewItem({
                        ...newItem,
                        purchaseQuantity: parseInt(e.target.value),
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-success"
                onClick={handleTableOfItems}
              >
                Add
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={resetValues}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal*/}
      <div>
        <div className="row pt-3">
          <div className="col-3">
            <Link to="/">
              <i
                className="fa fa-home text-light bg-primary p-2 border border-dark rounded "
                aria-hidden="true"
                style={{ cursor: "pointer" }}
              ></i>
            </Link>
          </div>
          <div className="col text-center">
            <h3>Inventory</h3>
          </div>
        </div>
        <div className="row mt-3 justify-content-center">
          <div className="col-3">
            <label htmlFor="filter">Filter By :</label>
            <select name="day" id="filter">
              <option value="">--Select--</option>
              <option value="">Today</option>
              <option value="">Yesterday</option>
              <option value="">This Week</option>
              <option value="">Last Week</option>
              <option value="">This Month</option>
              <option value="">Last Month</option>
              <option value="">Custom</option>
            </select>
          </div>
          <div className="col-3">
            <label htmlFor="from">From</label>
            <input type="date" id="from" />
          </div>
          <div className="col-3">
            <label htmlFor="To">To</label>
            <input type="date" id="To" />
          </div>
          <div className="col-3">
            <button
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Add Items
            </button>
          </div>
        </div>

        <div className="row mt-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Item Name</th>
                <th scope="col">Price</th>
                <th scope="col">Purchase</th>
                <th scope="col">Sold</th>
                <th scope="col">In-Stock</th>
              </tr>
            </thead>
            <tbody>
              {tableOfItems.map((tr, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{tr.name}</td>
                    <td>{tr.price}</td>
                    <td>{tr.purchaseQuantity}</td>
                    <td>{tr.sold}</td>
                    <td>{tr.inStock}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Inventory;

/* 
Completed Tasks:
 

    * Re render the cart screen respectively to the local storage items
    
    * Set the previous payment values to be empty

 
In Progress Task(s);

    * design the component for inventory items
 
    * design the Form Component for adding the inventory items

            - Using Bootstrap tables


Pending Tasks:
  
    
    * design the function for request item
    
    * Dynamically add the table rows contains the
              - inventory items name,price,quantity,sold,purchased details
              to table body
 */
