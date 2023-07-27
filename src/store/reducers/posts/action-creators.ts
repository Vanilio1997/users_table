import { POSTS_ACTION_TYPE } from './action-types';
import { IGetPosts , IPosts,IGetPostsForPage } from './types';
import { IPost } from '../../../types/common';


export const getPosts = ({posts,postsOnPage}:IPosts):IGetPosts => ({
    type: POSTS_ACTION_TYPE.GET_POSTS,
    payload: {posts ,postsOnPage},
});

export const getPostsForPage = ({posts,postsOnPage}:IPosts): IGetPostsForPage => ({
    type: POSTS_ACTION_TYPE.GET_POSTS_FOR_PAGE,
    payload: {posts ,postsOnPage},
});

