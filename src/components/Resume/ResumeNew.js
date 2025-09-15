import React, { useState, useEffect } from "react";
import { Container, Row, Alert } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const pdfFile = "/Nityash_resume.pdf"; // PDF in public folder

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoadError(false);
    console.log(`PDF loaded successfully with ${numPages} pages`);
  };

  const onDocumentLoadError = (error) => {
    console.error("PDF failed to load:", error);
    setLoadError(true);
  };

  return (
    <Container fluid className="resume-section" style={{ position: "relative" }}>
      <Particle />

      {/* Top Download Button */}
      <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
        <Button variant="primary" href={pdfFile} target="_blank" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload /> &nbsp;Download CV
        </Button>
      </Row>

      {/* PDF Viewer */}
      <Row className="resume" style={{ justifyContent: "center", overflowX: "auto" }}>
        {loadError ? (
          <Alert variant="danger" style={{ textAlign: "center" }}>
            PDF failed to load.
          </Alert>
        ) : (
          <Document
            file={pdfFile}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.7 : 0.6}
              />
            ))}
          </Document>
        )}
      </Row>

      {/* Bottom Download Button */}
      <Row style={{ justifyContent: "center", marginTop: "20px" }}>
        <Button variant="primary" href={pdfFile} target="_blank" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload /> &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
