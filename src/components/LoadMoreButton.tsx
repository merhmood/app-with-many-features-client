import { LoadMoreButtonProps } from '@/types/sheetDropZoneTypes';
import loadMoreHandler from '@/utilities/loadMoreHandler';
import styles from '@/components/SheetUploadDropZone.module.css';

export default function LoadMoreButton(props: LoadMoreButtonProps) {
  const {
    setTableContent,
    workbook,
    tableContent,
    loadmoreCursor,
    increaseOffset,
  } = props;
  return (
    <button
      onClick={() => {
        setTableContent(
          loadMoreHandler(workbook, tableContent, loadmoreCursor)
        );
        increaseOffset();
      }}
      className={styles.loadmore}
    >
      Load More
    </button>
  );
}
