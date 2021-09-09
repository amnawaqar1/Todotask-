import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Archieve from "./archieve";
import Card from "./card";
import Trash from "./trash";
import Viewtask from "./viewtask";
import Search from "./search";
const DashBoard = ({ Data1 }) => {
  const [Data, Setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3002/user").then((response) => {
      Setdata(response.data);
    });
  }, []);

  return (
    <div>
      <Router>
        <div class="container bg-light">
          <div class="col-md-12 text-center">
            <button type="button" class="btn btn-outline-primary">
              <Link to="/add">AddTask</Link>
            </button>
            <button type="button" class="btn btn-outline-primary">
              <Link to="/search">ViewTask</Link>
            </button>
            <button type="button" class="btn btn-outline-primary">
              <Link to="/archieve">Archieved</Link>
            </button>
            <button type="button" class="btn btn-outline-primary">
              <Link to="/trash">Trash</Link>
            </button>
          </div>
        </div>

        <Switch>
          <Route path="/add" exact>
            {" "}
            <Card Data={Data} />
          </Route>
          <Route path="/search" exact>
            {" "}
            <Search S={Data} />
          </Route>
          <Route path="/trash" exact>
            {" "}
            <Trash T={Data} />
          </Route>
          <Route path="/archieve" exact>
            {" "}
            <Archieve A={Data} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default DashBoard;
