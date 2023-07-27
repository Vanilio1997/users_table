import { POSTS_ACTION_TYPE } from './action-types';
import { IPost } from '../../../types/common';


export type PostsType = IPost[] | null;

export interface PostsState{
   posts: PostsType
   postsForFilter: PostsType
   postsOnPage: PostsType
}

export interface IPosts{
   posts: PostsType
   postsOnPage: PostsType
}

export interface IGetPosts {
   type: POSTS_ACTION_TYPE.GET_POSTS;
   payload: IPosts
}

export interface IGetPostsForPage {
   type: POSTS_ACTION_TYPE.GET_POSTS_FOR_PAGE
   payload: IPosts
}

export type PostsActions = IGetPosts | IGetPostsForPage;
