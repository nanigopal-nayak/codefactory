import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Java from "./pages/Java";
import Db from "./pages/Db";
import Spring from "./pages/Spring";
import JavaScript from "./pages/JavaScript";
import React from "./pages/React"; 

import Certificate from "./pages/Certificate";
import Instructions from "./pages/Instructions";
import Exam from "./pages/Exam";
import Result from "./pages/Result";
import FinalCertificate from "./pages/FinalCertificate";
import CvGenerator from "./pages/CvGenerator";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/java" element={<Java />} />
      <Route path="/db" element={<Db />} />
      <Route path="/spring" element={<Spring />} />
      <Route path="/javascript" element={<JavaScript />} />
      <Route path="/react" element={<React />} />

      <Route path="/certificate" element={<Certificate />} />
      <Route path="/instructions" element={<Instructions />} />
      <Route path="/exam" element={<Exam />} />
      <Route path="/result" element={<Result />} />
      <Route path="/final-certificate" element={<FinalCertificate />} />

      <Route path="/cv" element={<CvGenerator />} />

      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  );
}

export default App;