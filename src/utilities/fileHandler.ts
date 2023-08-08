import {
  ArrayOfNumberAndString,
  Sheets,
  LoadmoreCursor,
} from '@/types/sheetDropZoneTypes';

import parseWorkbook from './parseWorkbook';
import loadMoreHandler from './loadMoreContentHandler';

export default function fileHandler(
  file: File,
  setWorkbook: React.Dispatch<React.SetStateAction<Sheets[]>>,
  setRenderedTableContent: React.Dispatch<
    React.SetStateAction<ArrayOfNumberAndString>
  >,
  setLoadmoreCursor: React.Dispatch<React.SetStateAction<LoadmoreCursor>>
) {
  if (file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result && typeof e.target.result !== 'string') {
        const data = new Uint8Array(e.target.result);
        const parseWorkbookData = parseWorkbook(data);
        setWorkbook(parseWorkbookData);
        // Mounts an empty list
        setRenderedTableContent([]);
        // Updates the empty list with newly upload contents,
        // which will be limited to 50 elements
        setTimeout(() => {
          setRenderedTableContent(() =>
            loadMoreHandler(parseWorkbookData, [], {
              current: 1,
              next: 50,
              endOfFile: false,
            })
          );
        }, 50);
        // reset cursor to default value
        setLoadmoreCursor({
          current: 1,
          next: 50,
          endOfFile: false,
        });
      }
    };

    reader.readAsArrayBuffer(file);
  }
}
