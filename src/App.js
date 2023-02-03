import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <h1>Checkout</h1>
            </>
          }
        />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
