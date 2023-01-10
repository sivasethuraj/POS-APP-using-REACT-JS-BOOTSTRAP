import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { InventoryContext } from "../../App";

let initialId = 41;

function Inventory() {
  const [newItem, setNewItem] = useState({
    name: "",
    id: initialId,
    price: 0,
    purchaseQuantity: 0,
    sold: 0,
    inStock: 0,
    date: "",
  });
  const { tableOfItems, setTableOfItems } = useContext(InventoryContext);

  const resetValues = () => {
    setNewItem({
      name: "",
      price: 0,
      purchaseQuantity: 0,
      sold: 0,
      inStock: 0,
    });
  };

  const handleTableOfItems = () => {
    const { name, purchaseQuantity, price } = newItem;
    if (
      name === "" ||
      purchaseQuantity === "" ||
      purchaseQuantity <= 0 ||
      price === "" ||
      price <= 0
    ) {
      alert("Please Enter All Fields Correctly !");
      return;
    }

    let existingitem = tableOfItems.find((item) => item.name === newItem.name);
    console.log("existingitem", existingitem);

    if (existingitem) {
      alert(`${newItem.name} was already existed`);
      return;
    }
    const newTableOfItem = {
      ...newItem,
      id: initialId++,
      date: new Date(),
      inStock: newItem.purchaseQuantity,
    };
    console.log("newTableOfItem", newTableOfItem);
    localStorage.setItem(
      "inventory",
      JSON.stringify([
        ...tableOfItems,
        {
          ...newTableOfItem,
        },
      ])
    );
    setTableOfItems((prev) => [
      ...prev,
      {
        ...newTableOfItem,
      },
    ]);

    resetValues();
  };

  // useEffect(() => {
  //   console.log("tableOfItems: ", tableOfItems.length, tableOfItems);
  // }, [tableOfItems]);

  useEffect(() => {
    const newTableOfItem = JSON.parse(localStorage.getItem("inventory"));
    if (newTableOfItem.length > 0) {
      initialId = newTableOfItem[newTableOfItem.length - 1].id + 1;
      // console.log(initialId, "id");

      setTableOfItems(newTableOfItem);
    }
  }, []);

  const heightStyle = {
    minHeight: "100vh",
  };

  const deleteItem = (itemId) => {
    const newTableOfItem = tableOfItems.filter((item) => {
      return item.id !== itemId;
    });

    localStorage.setItem("inventory", JSON.stringify(newTableOfItem));
    setTableOfItems(newTableOfItem);
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
          <div style={{ position: "absolute", left: "2rem", top: "1rem" }}>
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
                    <td>
                      <button
                        className="btn btn-danger py-1"
                        onClick={() => deleteItem(tr.id)}
                      >
                        Delete
                      </button>
                    </td>
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
    
    * design the component for inventory items

    * design the Form Component for adding the inventory items

 
In Progress Task(s);

   * Id state value remove from form cause it doesn't unique 
  
   * Id state value will be dunamically allocated for each and every inventory items
   
   * Clear the rerender bugs in Modal in the bootstrap form component
   * To design responsive ui from non-responsive ui


Pending Tasks:
     
    * design the function for request item
    
    * Dynamically add the table rows contains the
              ~ inventory items name,price,quantity,sold,purchased details
              to table body
 */
