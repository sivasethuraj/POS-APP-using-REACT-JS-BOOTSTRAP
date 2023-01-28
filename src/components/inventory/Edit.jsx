import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: 0,
      quantity: 0,
      inStock: 0,
      sold: 0,
      clickedId: parseInt(this.props.clickedId)
        ? parseInt(this.props.clickedId)
        : 0,
      submitted: false,
    };
  }
  componentDidMount() {
    const newTableOfItem = JSON.parse(localStorage.getItem("inventory"));
    if (newTableOfItem) {
      const row = newTableOfItem.filter((item) => {
        return item.id === this.state.clickedId;
      });
      if (row[0]) {
        const { name, price, purchaseQuantity, inStock, sold } = row[0];
        console.log(name, price, purchaseQuantity);
        this.setState({
          name: name,
          price: price,
          quantity: purchaseQuantity,
          inStock: inStock,
          sold: sold,
        });
      }
    }
  }

  handleSave = () => {
    if (
      this.state.name === "" ||
      this.state.name === " " ||
      this.state.name === "null" ||
      (this.state.price && this.state.price <= 0) ||
      !this.state.price
    ) {
      this.setState({
        submitted: false,
      });
      alert("Please Enter Correct Values !");
      return false;
    }

    const newTableOfItem = JSON.parse(localStorage.getItem("inventory"));
    if (newTableOfItem) {
      const oldValues = newTableOfItem.filter(
        (item) => item.id !== this.state.clickedId
      );
      let modifyValues = newTableOfItem.filter(
        (item) => item.id === this.state.clickedId
      );
      modifyValues[0].name = this.state.name;
      modifyValues[0].price = this.state.price;
      if (oldValues) {
        const finalizedData = [...oldValues, ...modifyValues];
        localStorage.setItem("inventory", JSON.stringify(finalizedData));
        console.log(finalizedData);
      } else {
        const finalizedData = [...modifyValues];
        localStorage.setItem("inventory", JSON.stringify(finalizedData));
        console.log(finalizedData);
      }
      this.setState({
        submitted: true,
      });
    }
  };

  style = {
    maxWidth: "97vw",
    minHeight: "100vh",
  };

  render() {
    return (
      <div style={this.style}>
        <h1 className="text-center">Edit</h1>
        <div className="row justify-content-center mt-5">
          <div
            className="col-5"
            style={{
              boxShadow: "0 0 1em #000",
              padding: "1em",
              borderRadius: ".4em",
            }}
          >
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
                  value={this.state.name && this.state.name}
                  onChange={(e) => {
                    this.setState({
                      name: e.target.value && e.target.value,
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
                  value={this.state.price}
                  onChange={(e) => {
                    this.setState({
                      price: parseInt(e.target.value)
                        ? parseInt(e.target.value)
                        : 0,
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
                  readOnly
                  type="number"
                  autoComplete="off"
                  id="address"
                  className="form-control"
                  value={this.state.quantity}
                  onChange={(e) => {
                    this.setState({
                      purchaseQuantity: parseInt(e.target.value)
                        ? parseInt(e.target.value)
                        : 0,
                    });
                  }}
                />
              </div>
            </div>
            <div className="row my-2">
              <div className="col-3">
                <label htmlFor="sold" className="form-label">
                  Sold
                </label>
              </div>
              <div className="col-9">
                <input
                  readOnly
                  type="text"
                  id="sold"
                  autoComplete="off"
                  className="form-control"
                  value={this.state.sold}
                  onChange={(e) => {
                    this.setState({
                      sold: parseInt(e.target.value)
                        ? parseInt(e.target.value)
                        : 0,
                    });
                  }}
                />
              </div>
            </div>
            <div className="row my-2">
              <div className="col-3">
                <label htmlFor="Instock" className="form-label">
                  In Stock
                </label>
              </div>
              <div className="col-9">
                <input
                  readOnly
                  type="text"
                  id="Instock"
                  autoComplete="off"
                  className="form-control"
                  value={this.state.inStock}
                  onChange={(e) => {
                    this.setState({
                      inStock: parseInt(e.target.value)
                        ? parseInt(e.target.value)
                        : 0,
                    });
                  }}
                />
              </div>
            </div>
            <div className="row my-3 justify-content-center">
              <span className="col-3">
                <Link to="/inventory">
                  <button className="btn btn-danger col-12">Cancel</button>
                </Link>
              </span>
              {this.state.submitted && <Navigate to={"/inventory"} />}
              <span className="col-3">
                <button
                  className="btn btn-success col-12"
                  disabled={this.disableSaveBtn}
                  onClick={() => {
                    this.handleSave();
                  }}
                >
                  Save
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
