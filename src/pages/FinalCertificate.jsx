import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./FinalCertificate.css";
import logo from "../assets/logo.png";
import signature from "../assets/english.png";

const FinalCertificate = () => {
  const certificateRef = useRef();
  const [name, setName] = useState("");

  const location = useLocation();

  const { score = 0, total = 0 } = location.state || {};

  // ✅ calculate here (DON'T redeclare from state)
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  // ✅ correct useRef usage
  const certificateId = useRef("JFS-" + Math.floor(Math.random() * 1000000));

  const downloadPDF = () => {
    html2canvas(certificateRef.current, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("landscape", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("certificate.pdf");
    });
  };

  return (
    <div className="certificate-wrapper">

      {/* Input */}
      <div className="input-box">
        <h2>Enter Your Name</h2>

        <input
          type="text"
          placeholder="e.g. John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={downloadPDF}>
          Download Certificate
        </button>
      </div>

      {/* Certificate */}
      <div className="certificate" ref={certificateRef}>

        <img src={logo} className="watermark" alt="logo" />

        <div className="border-box">

          <h5 className="subtitle">CODE NEXUS ACADEMY</h5>

          <h1>Certificate of Completion</h1>

          <p className="text">This is proudly presented to</p>

          <h2 className="name">{name || "Your Name"}</h2>

          <p className="text">for successfully completing the</p>

          <h3>Java Full Stack Certification Program</h3>

          <div className="details">
            <div><strong>Score:</strong> {score}/{total}</div>
            <div><strong>Percentage:</strong> {percentage}%</div>
            <div><strong>Date:</strong> {new Date().toLocaleDateString()}</div>
          </div>

          <div className="cert-id">
            Certificate ID: <b>{certificateId.current}</b>
          </div>

          <div className="signature-box">
            <img src={signature} alt="Authorized Signature" className="signature-img" />
            <div className="line"></div>
            <p className="issuer">Code Nexus Training Authority</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FinalCertificate;