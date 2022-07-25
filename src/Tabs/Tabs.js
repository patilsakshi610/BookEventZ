import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Order from "./Order";
import Payment from "./Payment";
import Shipping from "./Shipping";
import "./Tabs.css";

function Tabs(props) {
  return (
    <>
      <NavLink style={{ color: "white" }} to="/">
        Go to Home
      </NavLink>
      <div className="tabs_wrapper">
        <div className="tab_header">Place your order</div>
        <div className="tabs">
          <NavLink
            className="tab"
            activeClassName="tab_active"
            to="/tabs/shipping"
          >
            Shipping
          </NavLink>
          <NavLink
            className="tab"
            activeClassName="tab_active"
            to="/tabs/payment"
          >
            Payment
          </NavLink>
          <NavLink
            className="tab"
            activeClassName="tab_active"
            to="/tabs/order"
          >
            Order Placed
          </NavLink>
        </div>
        <div className="tab_sections">
          <Switch>
            <Route path={"/tabs/shipping"} component={Shipping} />
            <Route path={"/tabs/payment"} component={Payment} />
            <Route path={"/tabs/order"} component={Order} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default Tabs;
