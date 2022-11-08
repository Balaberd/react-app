import React from "react";
import OrdersList from "features/OrdersList/components/OrdersList";
import { Provider } from "react-redux";
import store from "./features/OrdersList";

function App() {
  return (
    <Provider store={store}>
      <OrdersList />;
    </Provider>
  );
}

export default App;
