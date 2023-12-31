export type Sheets = { name: string; rows: Array<Array<string | number>> };

export type ArrayOfNumberAndString = Array<Array<number | string>>;

export type LoadmoreCursor = {
  current: number;
  next: number;
  endOfFile: boolean;
};

export type DropZoneProps = {
  uploadButtonClick: () => void;
  fileRef: React.RefObject<HTMLInputElement>;
  setWorkbook: React.Dispatch<React.SetStateAction<Sheets[]>>;
  setTableContent: React.Dispatch<React.SetStateAction<ArrayOfNumberAndString>>;
  setLoadmoreCursor: React.Dispatch<React.SetStateAction<LoadmoreCursor>>;
  setInvalidFile: React.Dispatch<React.SetStateAction<boolean>>;
};

export type LoadMoreButtonProps = {
  setTableContent: React.Dispatch<React.SetStateAction<ArrayOfNumberAndString>>;
  workbook: Sheets[];
  tableContent: ArrayOfNumberAndString;
  loadmoreCursor: LoadmoreCursor;
  increaseOffset: () => void;
};

export type TableSectionProps = {
  workbook: Sheets[];
  tableContent: ArrayOfNumberAndString;
  loadmoreCursor: LoadmoreCursor;
  setTableContent: React.Dispatch<React.SetStateAction<ArrayOfNumberAndString>>;
  setLoadmoreCursor: React.Dispatch<React.SetStateAction<LoadmoreCursor>>;
};

type FileReaderType = {
  new (): FileReader;
  prototype: FileReader;
  readonly EMPTY: 0;
  readonly LOADING: 1;
  readonly DONE: 2;
};

export type CheckFileParameters = {
  file: File;
  setWorkbook: React.Dispatch<React.SetStateAction<Sheets[]>>;
  setTableContent: React.Dispatch<React.SetStateAction<ArrayOfNumberAndString>>;
  setLoadmoreCursor: React.Dispatch<React.SetStateAction<LoadmoreCursor>>;
  setInvalidFile: React.Dispatch<React.SetStateAction<boolean>>;
  fileReader: FileReaderType;
  fileValidator: (file: File) => boolean;
  fileHandler: (fileHandlerParameters: FileHandlerParameters) => void;
};

export type FileHandlerParameters = {
  file: File;
  setWorkbook: React.Dispatch<React.SetStateAction<Sheets[]>>;
  setTableContent: React.Dispatch<React.SetStateAction<ArrayOfNumberAndString>>;
  setLoadmoreCursor: React.Dispatch<React.SetStateAction<LoadmoreCursor>>;
  fileReader: FileReaderType;
};
