import { PAGE_ACTION_TYPES } from './action-types';


// state

export interface IPagesSate {
   pageNumber: number;
   maxPages: number
}

// action-creators

export interface IChangePage {
   type: PAGE_ACTION_TYPES.CHANGE_PAGE;
   payload: number;
}

export interface INextPage{
   type: PAGE_ACTION_TYPES.NEXT_PAGE;
}

export interface IPrevPage{
   type: PAGE_ACTION_TYPES.PREV_PAGE;
}

export interface IMaxPages{
   type: PAGE_ACTION_TYPES.MAX_PAGES;
   payload: number;
}

export type PagesActions  = IChangePage | INextPage | IPrevPage | IMaxPages;
