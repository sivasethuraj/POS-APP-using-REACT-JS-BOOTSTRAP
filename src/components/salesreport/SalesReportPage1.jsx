import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SalesReportPage1() {
  const [showDateFilter, setShowDateFilter] = useState(false);
  const [filterType, setFilterType] = useState("select");
  const [customDateValue, setCustomDateValues] = useState({
    from: "",
    to: "",
  });

  let [tableOfItems, setTableOfItems] = useState([
    ...JSON.parse(localStorage.getItem("salesReport")),
  ]);

  const validTableOfItemArray = () => {
    const newTableOfItem = JSON.parse(localStorage.getItem("salesReport"));
    tableOfItems = [...newTableOfItem];
  };

  useEffect(() => {
    validTableOfItemArray();
  }, []);

  const heightStyle = {
    minHeight: "100vh",
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
            <h3>Sales Report</h3>
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
        </div>

        <div className="row mt-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Item Name</th>
                <th scope="col">Sold Quantity</th>
                <th scope="col">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {tableOfItems &&
                tableOfItems.map((tr, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index}</th>
                      <td>{tr.name}</td>
                      <td>{tr.soldQuantity}</td>
                      <td>$ {tr.totalPrice}</td>
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

export default SalesReportPage1;
