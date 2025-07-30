import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./pages/Login";
import Header from "./pages/Header";
import Pricing from "./pages/Pricing";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/price" element={<Pricing />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
