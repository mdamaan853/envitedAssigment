import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./component/dashboard/dashboard"
import CreateEvent from "./component/event/CreateEvent"
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";

function router() {
  return (
    <div className="App">
        <h2>hello</h2>
        {/* <Dashboard/> */}
        <CreateEvent/>
      {/* <Routes > */}
        {/* <></> */}
      {/* <Route path='/' element={<Dashboard/>} /> */}
        {/* <Route path="/contact/:id">
          <Contact />
        </Route> */}
        {/* <Route path="/contact">
          <AllContacts />
        </Route> */}
        {/* <Route path="/">
          <Home />
        </Route> */}
      {/* </Routes > */}
    </div>
  );
}

export default router