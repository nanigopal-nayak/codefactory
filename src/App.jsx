import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Java from "./pages/Java/Java.jsx";
import Db from "./pages/DB/Db.jsx";
import Spring from "./pages/Spring/Spring.jsx";
import JavaScript from "./pages/JavaScript/JavaScript.jsx";
import React from "./pages/React/React.jsx"; 

import Certificate from "./pages/Certificate/Certificate";
import Instructions from "./pages/Certificate/Instructions";
import Exam from "./pages/Certificate/Exam";
import Result from "./pages/Certificate/Result.jsx";
import FinalCertificate from "./pages/Certificate/FinalCertificate";

import CvGenerator from "./pages/CV/CvGenerator.jsx";
import Jobs from "./pages/Jobs/Jobs.jsx";

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