import React from "react";
import Header from "./component/Header";
import Productos from "./component/Productos";
import NuevoProducto from "./component/NuevoProducto";
import EditaProducto from "./component/EditaProducto";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./stores";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Productos} />
            <Route exact path="/productos/nuevo" component={NuevoProducto} />
            <Route
              exact
              path="/productos/editar/:id"
              component={EditaProducto}
            />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
