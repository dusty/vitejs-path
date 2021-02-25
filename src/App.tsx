import React, { useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { Item } from "./Item";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <p>
          <Link to="/items/1">Item 1</Link>
          <Link to="/items/1.1" style={{ marginLeft: "10px" }}>
            Item 1.1
          </Link>
        </p>
      </div>
      <Switch>
        <Route path="/items/:id">
          <Item />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
