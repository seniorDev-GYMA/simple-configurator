import { Button } from "antd";
import React from "react";

export default ({ order }) => {
  return (
    <div
      style={{
        display: "flex",
        boxShadow: "1px 2px 10px rgba(0, 0, 0, 0.4)",
        margin: 10,
        padding: 20,
        background: "white",
      }}
    >
      <div>
        <img alt="example" src={order.image} height="200px" />
      </div>
      <div style={{ flex: 1 }}>
        <div>Order for: {order.orderFor}</div>
        <div>Size: {order.size}</div>
      </div>
      <div>
        <Button type="danger">Delete</Button>
      </div>
    </div>
  );
};
