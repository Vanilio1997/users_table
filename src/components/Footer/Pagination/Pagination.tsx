import React from 'react';
import s from './Pagination.module.css';
import { getPagesArr } from '../../../utilits';

interface IPaginationProps {
   maxPages: number
   currentPage: number
   changePage: (pageNumber:number) => void
   nextPage: () => void
   prevPage: () => void
}

export const Pagination = ({maxPages,changePage,currentPage,nextPage,prevPage}:IPaginationProps) => {
    const pagesArr = getPagesArr(maxPages);
    return (
        <div className={s.Pagination}>
            <button onClick={prevPage} className={s.wordSwapBtn}>Назад</button>
            <div className={s.pagesContainer}>
                {
                    pagesArr.map(page => (
                        <div
                            className={currentPage === page ? `${s.activePage} ${s.page} ` : s.page}
                            onClick={() => changePage(page)}
                            key={page}>
                            {page}
                        </div>
                    ))
                }
            </div>
            <button onClick={nextPage} className={s.wordSwapBtn}>Далее</button>
        </div>
    );
};
