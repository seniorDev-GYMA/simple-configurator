import * as React from "react";
import { Link } from "gatsby";
import { OrderReducer } from "../context/ordersReducers";
import { ADD_ORDER } from "../context/types";
import { ordersContext } from "../context/ordersContext";
import Customization from "../components/Customization";

const IndexPage = () => {
  // const initialState = {
  //   orders: [
  //     {
  //       id: "20",
  //       test: "Hello, world",
  //     },
  //   ],
  // };
  // const [state, dispatch] = React.useReducer(OrderReducer, initialState);
  // const addOrder = (order) => {
  //   dispatch({
  //     type: ADD_ORDER,
  //     payload: {
  //       id: "newId",
  //       text: "New Order Test",
  //     },
  //   });
  // };
  const context = React.useContext(ordersContext);
  return (
    <>
      <div className="navbarStyle">
        <Link to={"/"} className="rl">
          Shirt Design
        </Link>
        <Link to={"/orders"} className="rl">
          Orders
        </Link>
      </div>

      <button onClick={() => context.addOrder()}>Add Order</button>
      <Customization setThemeNumber={null} themeNumber={0} addOrder={null} />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
