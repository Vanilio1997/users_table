import { PostsState ,PostsActions } from './types';
import { POSTS_ACTION_TYPE } from './action-types';

const postsState: PostsState  = {
    posts: null,
    postsForFilter:null,
    postsOnPage: null
};

export const postsReducer = (state = postsState , action:PostsActions) => {
    switch(action.type){
    case POSTS_ACTION_TYPE.GET_POSTS:
        return {...state,
            posts: action.payload.posts,
            postsOnPage: action.payload.postsOnPage,
            postsForFilter: action.payload.posts
        };
    case POSTS_ACTION_TYPE.GET_POSTS_FOR_PAGE:
        return {...state , postsOnPage: action.payload.postsOnPage, postsForFilter: action.payload.posts };
    default:
        return state;
    }
};
