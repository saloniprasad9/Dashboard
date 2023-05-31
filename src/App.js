import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./login/login.component";
import Register from "./register/register.component";
import Reset from "./reset/reset.component";
import Dashboard from "./dashboard/dashboard.component";

function App() {
  return (
    <div className="App">
      {/* <Login/>
      <Register/> */}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/reset" element={<Reset/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </div>
  );
}

export default App;