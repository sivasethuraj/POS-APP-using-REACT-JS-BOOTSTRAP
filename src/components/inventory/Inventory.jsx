import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InventoryContext } from "../../App";

let initialId = 41;

function Inventory() {
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [filterType, setFilterType] = useState("select");
  const [customDateValue, setCustomDateValues] = useState({
    from: "",
    to: "",
  });
  const [newItem, setNewItem] = useState({
    name: "",
    id: initialId,
    price: 0,
    purchaseQuantity: 0,
    sold: 0,
    inStock: 0,
    date: "",
  });
  const navigate = useNavigate();
  let { tableOfItems, setTableOfItems, setClickedId } = useContext(
    InventoryContext
  );

  const validTableOfItemArray = () => {
    const newTableOfItem = JSON.parse(localStorage.getItem("inventory"));
    if (newTableOfItem) {
      tableOfItems = [...newTableOfItem];
    }
  };
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
    validTableOfItemArray();
    let existingitem = tableOfItems.find((item) => item.name === newItem.name);
    // console.log("existingitem", existingitem);

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
    // console.log("newTableOfItem", newTableOfItem);
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
    setFilterType("select");
  };

  useEffect(() => {
    const newTableOfItem = JSON.parse(localStorage.getItem("inventory"));
    if (newTableOfItem && newTableOfItem.length > 0) {
      initialId = newTableOfItem[newTableOfItem.length - 1].id + 1;
      setTableOfItems(newTableOfItem);
      console.log("loaded");
    }
  }, []);

  const heightStyle = {
    minHeight: "100%",
  };

  const deleteItem = (itemId) => {
    if (window.confirm("Are you sure you want to delete!")) {
      validTableOfItemArray();
      const newTableOfItem = tableOfItems.filter((item) => {
        return item.id !== itemId;
      });

      localStorage.setItem("inventory", JSON.stringify(newTableOfItem));
      setTableOfItems(newTableOfItem);
    }
  };
  const editItem = (id) => {
    setClickedId(String(id));
  };

  const filterLogic = () => {
    validTableOfItemArray();
    if (filterType === "custom") {
      setShowDateFilter(true);
    } else {
      setShowDateFilter(false);
    }
    if (
      customDateValue.from !== "" &&
      customDateValue.to !== "" &&
      filterType === "custom"
    ) {
      const filteredTableRow = tableOfItems.filter((item) => {
        let actualDate = Date.parse(item.date);
        let fromDate = Date.parse(customDateValue.from);
        let toDate = Date.parse(customDateValue.to);

        return (actualDate >= fromDate) & (actualDate <= toDate);
      });
      if (filteredTableRow.length > 0) {
        setTableOfItems(filteredTableRow);
      }
      return;
    }
    if (filterType === "today") {
      setTableOfItems(
        tableOfItems.filter((item) => {
          let day = new Date(item.date).getDate();
          let month = new Date(item.date).getMonth();
          let year = new Date(item.date).getFullYear();
          let actualTime = new Date();
          return (
            actualTime.getDate() === day &&
            actualTime.getMonth() === month &&
            actualTime.getFullYear() === year
          );
        })
      );
      return;
    }
    if (filterType === "yesterday") {
      setTableOfItems(
        tableOfItems.filter((item) => {
          let day = new Date(item.date).getDate();
          let month = new Date(item.date).getMonth();
          let year = new Date(item.date).getFullYear();
          let actualTime = new Date();
          return (
            actualTime.getDate() - 1 === day &&
            actualTime.getMonth() === month &&
            actualTime.getFullYear() === year
          );
        })
      );
      return;
    }
    if (filterType === "thisWeek") {
      setTableOfItems(
        tableOfItems.filter((item) => {
          let day = new Date(item.date).getDate();
          let month = new Date(item.date).getMonth();
          let year = new Date(item.date).getFullYear();
          let actualTime = new Date();
          //
          function endOfWeek(date) {
            let lastday = date.getDate() - (date.getDay() - 1) + 6;
            return new Date(date.setDate(lastday));
          }
          function getLastWeeksDate() {
            const now = new Date();
            let start = now.getDay();
            return new Date(
              now.getFullYear(),
              now.getMonth(),
              now.getDate() - start
            );
          }
          const weekstart = getLastWeeksDate().getDate();
          const weekend = endOfWeek(getLastWeeksDate()).getDate();
          //
          return (
            weekstart <= day &&
            weekend >= day &&
            actualTime.getMonth() === month &&
            actualTime.getFullYear() === year
          );
        })
      );
      return;
    }
    if (filterType === "lastWeek") {
      setTableOfItems(
        tableOfItems.filter((item) => {
          let day = new Date(item.date).getDate();
          let month = new Date(item.date).getMonth();
          let year = new Date(item.date).getFullYear();
          let actualTime = new Date();
          //
          function endOfWeek(date) {
            let lastday = date.getDate() - (date.getDay() - 1) + 6;
            return new Date(date.setDate(lastday));
          }
          function getLastWeeksDate() {
            const now = new Date();
            let start = now.getDay();
            return new Date(
              now.getFullYear(),
              now.getMonth(),
              now.getDate() - 7 - start
            );
          }
          const weekstart = getLastWeeksDate().getDate();
          const weekend = endOfWeek(getLastWeeksDate()).getDate();
          //
          return (
            weekstart <= day &&
            weekend >= day &&
            actualTime.getMonth() === month &&
            actualTime.getFullYear() === year
          );
        })
      );
      return;
    }
    if (filterType === "thisMonth") {
      setTableOfItems(
        tableOfItems.filter((item) => {
          let month = new Date(item.date).getMonth();
          let year = new Date(item.date).getFullYear();
          let actualTime = new Date();

          return (
            actualTime.getMonth() === month && actualTime.getFullYear() === year
          );
        })
      );
      return;
    }
    if (filterType === "lastMonth") {
      setTableOfItems(
        tableOfItems.filter((item) => {
          let month = new Date(item.date).getMonth();
          let year = new Date(item.date).getFullYear();
          let actualTime = new Date();

          return (
            actualTime.getMonth() - 1 === month &&
            actualTime.getFullYear() === year
          );
        })
      );
      return;
    }
    if (filterType === "select") {
      validTableOfItemArray();
      setTableOfItems(tableOfItems);
      return;
    }
  };

  useEffect(() => {
    filterLogic();
  }, [filterType, customDateValue]);

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
            <label htmlFor="filter" className="pe-1">
              Filter By:{" "}
            </label>
            <select
              name="day"
              id="filter"
              onChange={(e) => setFilterType(e.target.value)}
            >
              <option value="select">--Select--</option>
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="thisWeek">This Week</option>
              <option value="lastWeek">Last Week</option>
              <option value="thisMonth">This Month</option>
              <option value="lastMonth">Last Month</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          {showDateFilter && (
            <>
              <div className="col-3">
                <label htmlFor="from" className="pe-1">
                  From
                </label>
                <input
                  type="date"
                  id="from"
                  value={customDateValue.from}
                  onChange={(e) => {
                    setCustomDateValues((prev) => {
                      return { ...prev, from: e.target.value };
                    });
                  }}
                />
              </div>
              <div className="col-3">
                <label htmlFor="to" className="pe-1">
                  To
                </label>
                <input
                  type="date"
                  id="to"
                  value={customDateValue.to}
                  onChange={(e) => {
                    setCustomDateValues((prev) => {
                      return { ...prev, to: e.target.value };
                    });
                  }}
                />
              </div>
            </>
          )}

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
              {!tableOfItems | (tableOfItems.length === 0) ? (
                <tr>
                  <td className="mt-4 text-center" colSpan={6}>
                    <h3>No Items Found</h3>
                  </td>
                </tr>
              ) : (
                tableOfItems &&
                tableOfItems.map((tr, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{tr.name}</td>
                      <td>{tr.price}</td>
                      <td>{tr.purchaseQuantity}</td>
                      <td>{tr.sold}</td>
                      <td>{tr.inStock}</td>
                      <td>
                        <button
                          className="btn btn-warning py-1"
                          onClick={() => {
                            editItem(tr.id);
                            navigate("/inventory/edit");
                          }}
                        >
                          Edit
                        </button>
                      </td>
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
                })
              )}
              {}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Inventory;
