
import styles from './Pagination.module.css'; 
import RightArrow from '../../assets/Images/right-arrow.svg';
import LeftArrow from '../../assets/Images/left-arrow.svg';
import DownArrow from '../../assets/Images/bottom-arrow.svg';
type PaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
};
const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagesToDisplay = [];
  for (let i = currentPage; i < currentPage + 3 && i <= totalPages; i++) {
    pagesToDisplay.push(i);
  }
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div className={styles.pagination}>
<div className={styles.pageBox}>
        <p>Show {currentPage}</p> 
        <img src={DownArrow} alt='arrow-icon'/>
      </div>
      <button 
        onClick={handlePrevPage} 
        disabled={currentPage === 1} 
        className={styles.pageButton}
      >
        <img src={LeftArrow} alt='left-arrow' className={styles.pagination_icon} />
      </button>
      <div className={styles.pageBoxes}>
        {pagesToDisplay.map((page) => (
          <div
            key={page}
            className={`${styles.active_page} ${currentPage === page ? styles.active : ''}`}
            onClick={() => onPageChange(page)}>
  {page}
</div>
        ))}
      </div>
      <button 
        onClick={handleNextPage} 
        disabled={currentPage === totalPages} 
        className={styles.pageButton}
      >
        <img src={RightArrow} alt='left-arrow' className={styles.pagination_icon} />
      </button>
    </div>
  );
};

export default Pagination;
