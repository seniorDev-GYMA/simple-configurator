import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import { ordersContext } from "../context/ordersContext";
import SingleOrder from "../components/SingleOrder";

const Orders = () => {
  const context = React.useContext(ordersContext);
  return (
    <>
      <div className="navbarStyle">
        <Link to="/">Shirt Design</Link>
        <h1>Hi from orders page</h1>
        <Link to="/">Back to home</Link>
      </div>

      {/* <div>{JSON.stringify(context)}</div> */}
      {context.orders.map((order, index) => (
        <SingleOrder order={order} key={index} />
      ))}
    </>
  );
};

export default Orders;
