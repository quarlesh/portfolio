"use client";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();
const PDFViewerClient = () => {
  return (
    <div style={{ padding: "2rem", display: "flex", overflow: "auto" }}>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Document
          file="Haylee_Quarles_Resume_March_2026.pdf"
          loading={
            <div style={{ padding: "2rem", textAlign: "center" }}>
              Loading PDF...
            </div>
          }
          error={
            <div
              style={{
                padding: "2rem",
                textAlign: "center",
              }}
            >
              Failed to load PDF. Please make sure the file exists in the public
              folder.
            </div>
          }
        >
          <Page
            pageNumber={1}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            width={800}
          />
        </Document>
      </div>
    </div>
  );
};

export default PDFViewerClient;
