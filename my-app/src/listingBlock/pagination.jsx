import React from 'react';
import styles from './pagination.module.css'; // Optional: styles for pagination

function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    return (
        <div className={styles.paginationControls}>
            <button className={styles.changePage} onClick={prevPage} disabled={currentPage === 1}>Previous</button>

            {/* Generate page numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
                const pageIndex = index + 1;
                return (
                    <button
                        className={currentPage === pageIndex
                            ? `${styles.pageNumber} ${styles.activePage}`
                            : styles.pageNumber}
                        key={pageIndex}
                        onClick={() => onPageChange(pageIndex)}
                        disabled={currentPage === pageIndex}
                    >
                        {pageIndex}
                    </button>
                );
            })}

            <button className={styles.changePage} onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
    );
}

export default Pagination;
