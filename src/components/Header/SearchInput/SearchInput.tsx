import {useState} from 'react';
import s from './SearchInput.module.css';
import logo from '../../../assests/search.svg';
import { UseTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';

export const SearchInput = () => {
    const [inputValue ,setInputValue] = useState<string>('');
    const posts = UseTypedSelector(state => state.posts.posts);
    const {getPostsForPage, maxPages, changePage}= useActions();
    function getTextValues(){
        const filtredPosts =  posts?.filter(posts => posts.body.includes(inputValue) || posts.title.includes(inputValue) || posts.id.toString().includes(inputValue));
        if(filtredPosts?.length){
            const lastPageNumber =  Math.ceil(filtredPosts?.length / 10);
            const postsOnPage = filtredPosts.slice(0 , 10);
            maxPages(lastPageNumber);
            changePage(1);
            getPostsForPage({postsOnPage:postsOnPage , posts:filtredPosts});
        } else{
            getPostsForPage({postsOnPage: null , posts: null});
            maxPages(1);
            changePage(1);
        }
    }
    return (
        <div className={s.container}>
            <div className={s.inputContainer}>
                <input
                    value={inputValue}
                    onChange={(e)=> setInputValue(e.target.value)}
                    className={s.input}
                    placeholder="Поиск"
                />
            </div>
            <button className={s.searchPictureContainer}  onClick={getTextValues    }>
                <img
                    className={s.searchPicture}
                    src={logo}
                    alt="logo"
                    height="21px"
                    width="21px"
                />
            </button>
        </div>
    );
};
