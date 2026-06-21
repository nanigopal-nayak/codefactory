import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Java from "./pages/Java";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/java" element={<Java />} />
    </Routes>
  );
}

export default App;