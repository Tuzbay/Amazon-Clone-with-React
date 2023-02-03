import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkokut" element={<h1>Checkout</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
              <div>HOME PAGE!</div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
