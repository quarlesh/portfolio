import PDFViewer from "@/components/pdf/PDFViewer";
import { Button } from "@/components/ui/button";

export default function ResumePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 datatype-font">Resume</h1>
      <div className="flex">
        <Button variant="primary">
          <a
            href="Quarles_Haylee_Resume.pdf"
            download="haylee_quarles_resume.pdf"
          >
            Download Resume
          </a>
        </Button>
      </div>
      <PDFViewer />
    </div>
  );
}
