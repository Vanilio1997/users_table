import {useEffect , useCallback} from 'react';

import s from './Table.module.css';
import { TableHeader } from './TableHeader';
import { TableBody } from './TableBody';
import { Loader } from '../../Loader';

import { UseTypedSelector } from '../../../hooks/useTypedSelector';
import { useActions } from '../../../hooks/useActions';
import { useRequest } from '../../../hooks/useRequest';
import { useSort } from '../../../hooks/useSort';

import { IPost,ICellInfo,PostsKeys } from '../../../types/common';


export const Table = () => {
    const {data, hasError,isLoading} = useRequest<IPost[]>('https://jsonplaceholder.typicode.com/posts' , []);
    const {getPosts ,maxPages, getPostsForPage} = useActions();
    const posts =  UseTypedSelector(state => state.posts.postsForFilter);
    const postsOnPage = UseTypedSelector(state => state.posts.postsOnPage);
    const currentPage = UseTypedSelector(state => state.pages.pageNumber);

    const titleSort = useSort<IPost>(posts , 'title' , 'string');
    const bodySort = useSort<IPost>(posts , 'body' , 'string');
    const idSort = useSort<IPost>(posts , 'id' ,'number');


    function sortValues(parameter:PostsKeys){
        const obj = {
            id: idSort,
            title: titleSort,
            body: bodySort
        };
        const currentSortElement = obj[parameter];
        const { changeValue, sortingData} = currentSortElement;
        changeValue();
        const lastNumberOfPost = 10 * currentPage;
        const newPostsData = sortingData?.length && [...sortingData];
        const newPostsonPage = sortingData.slice(lastNumberOfPost - 10, lastNumberOfPost);
        getPostsForPage({posts:newPostsData ,postsOnPage:newPostsonPage});
    }

    const tableHeader:ICellInfo[] = [
        {text:'ID' , onClick: sortValues , parameter: 'id'},
        {text:'Заголовок', onClick: sortValues ,parameter: 'title'},
        {text:'Описание' ,onClick: sortValues ,parameter: 'body'}
    ];

    useEffect(() => {
        const dataOnPage = data && [...data];
        dataOnPage?.splice(10,dataOnPage.length);
        dataOnPage && getPosts({posts:data, postsOnPage: dataOnPage});
        const pagesNumber = data?.length ? Math.ceil(data?.length / 10) : 1;
        maxPages(pagesNumber);
    },[data]);

    useEffect(()=>{
        const dataOnPage = posts && [...posts];
        const lastNumberOfPost = 10 * currentPage;
        const newPosts = dataOnPage && dataOnPage.slice(lastNumberOfPost - 10, lastNumberOfPost);
        if(newPosts){
            getPostsForPage({postsOnPage:newPosts , posts:posts});
        }
    }, [currentPage]);

    if(isLoading){
        return <Loader />;
    }

    if(hasError){
        return <h1>Произошшла ошибка данных при загрузке</h1>;
    }

    return (
        <>
            <table className={s.table}>
                <col style={{width:'10%'}}/>
	        <col style={{width:'50%'}}/>
	        <col style={{width:'40%'}}/>
                <TableHeader headerCell={tableHeader}/>
                { postsOnPage?.length ?
                    <TableBody postInfo={postsOnPage}/>
                    :
                    <tr className={s.errorContainer}>
                        <td>
                            <h1>Данных не найдено</h1>
                        </td>
                    </tr>
                }
            </table>
        </>
    );
};
