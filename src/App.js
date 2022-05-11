import { Route, Routes } from "react-router-dom";
import MainNavbar from "./Components/Layout/MainNavbar";
import Home from "./Page/Home";
import Booking from "../src/Page/Booking";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainNavbar /> <Home />
            </>
          }
        />
        <Route
          path="/booking"
          element={
            <>
              <MainNavbar /> <Booking />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
