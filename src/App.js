import logo from './logo.svg';
import './App.css';
import Router from "./router"
import Dashboard from "./component/dashboard/dashboard"
import CreateEvent from "./component/event/CreateEvent"
import ViewEvent from "./component/event/ViewEvent"

function App() {
  return (
    <div className="App">
      {/* <Dashboard/> */}
      <ViewEvent/>
    {/* <CreateEvent/> */}
      {/* <Router/> */}
    </div>
  );
}

export default App;
