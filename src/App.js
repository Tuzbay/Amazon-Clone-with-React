import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/checkokut" element={<h1>Checkout</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/" element={<h2>HomePage</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
