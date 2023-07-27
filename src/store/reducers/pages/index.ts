import { PagesActions, IPagesSate } from './types';
import { PAGE_ACTION_TYPES } from './action-types';


const pagesState: IPagesSate ={
    pageNumber: 1,
    maxPages: 0
};


export const pagesReducer  = (state = pagesState , action: PagesActions) => {
    switch(action.type){
    case PAGE_ACTION_TYPES.CHANGE_PAGE:
        return {...state , pageNumber: action.payload};
    case PAGE_ACTION_TYPES.NEXT_PAGE: {
        const newPageNumber = state.pageNumber + 1 > state.maxPages ? state.maxPages : state.pageNumber + 1;
        return {...state , pageNumber: newPageNumber};
    }
    case PAGE_ACTION_TYPES.PREV_PAGE: {
        const newPageNumber = state.pageNumber - 1 === 0 ? state.pageNumber : state.pageNumber - 1;
        return {...state , pageNumber: newPageNumber};
    }
    case PAGE_ACTION_TYPES.MAX_PAGES:
        return {...state , maxPages: action.payload};
    default:
        return state;
    }
};
