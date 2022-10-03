import logo from './logo.svg';
import './App.css';
import Dashboard from "./component/dashboard/dashboard"
import CreateEvent from "./component/event/CreateEvent"
import ViewEvent from "./component/event/ViewEvent"
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
             <Router>
      <Routes>
        {/* <Route exact path="/aa" element={<Dashboard />}> */}
          <Route path="/" element={<CreateEvent />} />
          <Route path="/event" element={<ViewEvent/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
