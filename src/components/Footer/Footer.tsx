import React from 'react';
import { Pagination } from './Pagination';
import { UseTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

export const Footer = () => {
    const lastPageNumber = UseTypedSelector((state) => state.pages.maxPages);
    const currentPage = UseTypedSelector((state) => state.pages.pageNumber);
    const {changePage, nextPage, prevPage} = useActions();
    return (
        <div>
            <Pagination
                changePage={changePage}
                currentPage={currentPage}
                nextPage={nextPage}
                prevPage={prevPage}
                maxPages={lastPageNumber}
/>
        </div>
    );
};
