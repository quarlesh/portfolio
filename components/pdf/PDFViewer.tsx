"use client";
import dynamic from "next/dynamic";

// Dynamically import the PDF viewer client component.
const PDFViewerClient = dynamic(() => import("./PDFViewerClient"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        fontSize: "1.2rem",
        color: "text-gray-600",
      }}
    >
      Loading PDF Viewer...
    </div>
  ),
});

const PDFViewer = () => {
  return <PDFViewerClient />;
};
export default PDFViewer;