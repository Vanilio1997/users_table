import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as PagesActions from './../store/reducers/pages/action-creators';
import * as PostsActions from './../store/reducers/posts/action-creators';

export const useActions = () => {
    const dispatch = useDispatch();

    const allActions = {
        ...PagesActions,
        ...PostsActions,
    };

    return bindActionCreators(allActions, dispatch);
};
