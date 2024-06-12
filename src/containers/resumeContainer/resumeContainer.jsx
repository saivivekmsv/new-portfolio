import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import SaiVivek from '../../assets/saivivek.pdf';
import { Show } from '@chakra-ui/react';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};
function ResumeContainer(props) {
  return (
    <div className="resume-container">
      <Show below="md">
        <Document file={SaiVivek} options={options}>
          <Page
            pageNumber={1}
            width={500}
            height={700}
            scale={1}
            className="position-property"
          />
        </Document>
      </Show>
      <Show above="md">
        <Document file={SaiVivek} options={options}>
          <Page pageNumber={1} width={500} height={700} scale={1} />
        </Document>
      </Show>
    </div>
  );
}

export default ResumeContainer;