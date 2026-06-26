import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Java from "./pages/Java";
import Db from "./pages/Db";
import Spring from "./pages/Spring";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/java" element={<Java />} />
      <Route path="/db" element={<Db />} />
      <Route path="/spring" element={<Spring />} />
    </Routes>
  );
}

export default App;