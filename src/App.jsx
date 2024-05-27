import "./App.css";
import SignUp from "./assets/signUp/SignUp";
import { Navigate, Routes, Route } from "react-router-dom";
import Home from "./component/user/home/Home";
import Details from "./assets/details/Details";

function App() {
  return (
    <div className="mainPage">
      <Routes>
        <Route path="/" element={<Navigate to="/signUp" />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      {/* <SignUp /> */}
    </div>
  );
}

export default App;
