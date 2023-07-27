import {combineReducers} from 'redux';

import { postsReducer } from './posts';
import { pagesReducer } from './pages';

const rootReducer = combineReducers({
    posts: postsReducer,
    pages: pagesReducer,
});

export default rootReducer;

