import "./App.css";
import React, { useState } from "react";
import Data from "./Data/data.json";
function App() {
  const [name, setname] = useState("");
  const [storeDate, setstoreDate] = useState("");
  const handlChange = (e) => {
    setname(e.target.value);
  };
  const handlChangedate = (e) => {
    setstoreDate(e.target.value);
  };
  console.log(name);
  return (
    <div className="App">
      <div className="outer-div">
        <h1>Welcome to Our App</h1>
        <div className="inner-div">
          <form className="form">
            <div className="text">
              <input
                className="text-input"
                type="text"
                name="name"
                value={name.value}
                placeholder="Search by first name"
                onChange={handlChange}
              />
              <div>OR</div>
              <input
                className="text-input"
                type="text"
                name="date"
                value={name.value}
                placeholder="search by date yyyy-mm-dd"
                onChange={handlChangedate}
              />
            </div>
          </form>
          <div className="orders">
            {name.length > 0 &&
              Data.map((data) => {
                if (data.firstName.includes(name)) {
                  return data.orders.map((order) => {
                    return (
                      <div key={order.orderID}>
                        <div>
                          <h4>orderId</h4>
                          {order.orderID}
                        </div>
                        <div>
                          <h4>amount</h4>
                          {order.amount}
                        </div>
                        <div>
                          <h4>date</h4>
                          {order.date}
                        </div>
                      </div>
                    );
                  });
                }
              })}
            {storeDate.length > 0 &&
              Data.map((data) => {
                return data.orders.map((curr) => {
                  if (curr.date.includes(storeDate)) {
                    return (
                      <div key={curr.orderID}>
                        <div>
                          <h4>orderId</h4>
                          {curr.orderID}
                        </div>
                        <div>
                          <h4>amount</h4>
                          {curr.amount}
                        </div>
                      </div>
                    );
                  }
                });
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
