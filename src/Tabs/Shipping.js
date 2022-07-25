import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Shipping() {
  const [inputData, setInputData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const history = useHistory();

  const disabledBtn = !inputData.name || !inputData.phone || !inputData.address;

  function handleClick() {
    history.push("/tabs/payment");
  }
  return (
    <div>
      <div className="shipping_container">
        <div className="shipping_address--container">
          <form className="form_container">
            <div className="input_container">
              <label>Full Name</label>
              <input
                onChange={(e) =>
                  setInputData({ ...inputData, name: e.target.value })
                }
                className="input"
                type={"text"}
                placeholder="Eg. Mark Zukerburg"
              />
            </div>
            <div className="input_container">
              <label>Mobile number</label>
              <input
                onChange={(e) =>
                  setInputData({ ...inputData, phone: e.target.value })
                }
                className="input"
                maxLength={10}
                type={"text"}
                placeholder="Eg. 99998 98999"
              />
            </div>
            <div className="input_container">
              <label>Address</label>
              <textarea
                onChange={(e) =>
                  setInputData({ ...inputData, address: e.target.value })
                }
                style={{ fontFamily: "inherit" }}
                className="input"
                type={"text"}
                placeholder="Eg. Rose Villa, Main Street, 401601"
              />
            </div>
          </form>
        </div>
        <div className="product">
          <img
            className="product_image"
            src={require("../Assets/ps4.jpg")}
            alt="product"
          />
          <div className="product_name">FIFA 19, PS4</div>
          <div className="product_quantity">Quantity: 1 pc</div>
        </div>
      </div>
      <button
        onClick={handleClick}
        style={{ width: "100%", marginTop: 20 }}
        className="btn"
        disabled={disabledBtn}
      >
        Save & Proceed
      </button>
    </div>
  );
}
