import React from "react";

export default function Order() {
  return (
    <div className="order_container">
      <img className="order_success_image" src={require("../Assets/fireworks.png")} alt="success" />
      <div className="order_success_message">Your order has been placed successfully</div>
    </div>
  );
}
