import { PAGE_ACTION_TYPES } from './action-types';
import { IChangePage ,INextPage ,IPrevPage, IMaxPages } from './types';

export const changePage = (pageNumber: number): IChangePage => ({
    type: PAGE_ACTION_TYPES.CHANGE_PAGE,
    payload: pageNumber
});

export const nextPage = () : INextPage => ({
    type: PAGE_ACTION_TYPES.NEXT_PAGE
});

export const prevPage = () : IPrevPage => ({
    type: PAGE_ACTION_TYPES.PREV_PAGE
});

export const maxPages = (maxPages: number): IMaxPages => ({
    type: PAGE_ACTION_TYPES.MAX_PAGES,
    payload: maxPages
});
