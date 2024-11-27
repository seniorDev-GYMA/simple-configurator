const React = require("react");

const { GlobalStateProvider } = require("./src/context/ordersContext");

exports.wrapRootElement = ({ element }) => {
  return <GlobalStateProvider>{element}</GlobalStateProvider>;
};
