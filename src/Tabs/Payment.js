import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Payment() {
  const [inputData, setInputData] = useState({
    card: "",
    cvv: "",
    month: months[0].toString(),
    year: years[0].toString(),
  });
  const history = useHistory();

  function handleClick() {
    history.push("/tabs/order");
  }

  const disableBtn =
    !inputData.card || !inputData.cvv || !inputData.month || !inputData.year;

  return (
    <form className="form_container">
      <div className="input_container">
        <label>Card Number</label>
        <input
          onChange={(e) => setInputData({ ...inputData, card: e.target.value })}
          className="input"
          type={"number"}
          maxLength={12}
          placeholder="Eg. 1234 3445 6567"
        />
      </div>
      <div className="input_container">
        <label>Expiry Date</label>
        <div className="expiry_date_inputs">
          <select
            onChange={(e) =>
              setInputData({ ...inputData, month: e.target.value })
            }
          >
            {months.map((month) => (
              <option value={month}>{month}</option>
            ))}
          </select>
          <select
            onChange={(e) =>
              setInputData({ ...inputData, year: e.target.value })
            }
          >
            {years.map((year) => (
              <option value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="input_container">
        <label>CVV</label>
        <input
          onChange={(e) => setInputData({ ...inputData, cvv: e.target.value })}
          className="input"
          type={"number"}
          maxLength={3}
          placeholder="***"
        />
      </div>
      <button
        disabled={disableBtn}
        type="button"
        onClick={handleClick}
        className="btn"
      >
        Pay ₹2,788
      </button>
    </form>
  );
}

let months = [];
let years = [];

for (let i = 1; i <= 12; i++) {
  months.push(i);
}
for (let i = 2023; i <= 2040; i++) {
  years.push(i);
}
