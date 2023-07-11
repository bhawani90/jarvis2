import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Menubar from './Menubar';
import Tenantdata from "./Tenantdata";
// import Dashboard from './Dashboard';
import Task from "./Task";
import { ToastContainer } from "react-bootstrap";
import { Provider } from "react-redux";
import Store from "./Store";
import Tasks from "./Tasks";
// import Login from './Login';
// import Tenantdata from './tenantdata';

function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      {/* <Menubar/> */}
      <BrowserRouter>
        <div className="header">
          <Link to={"/"}>Tenants</Link>
          <Link to={"/tasks"}>Tasks</Link>
        </div>
        <Routes>
          <Route exact path="/" element={<Tenantdata></Tenantdata>}></Route>
          <Route exact path="/tasks" element={<Tasks></Tasks>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
