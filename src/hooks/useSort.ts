import { useState ,useEffect} from 'react';

export const useSort = <T> (data: Array<T> | null, sortElement:keyof T , typeOFSort: 'string' | 'number') => {
    const [sortByDescending ,setSortByDescending] = useState(true);
    const [sortingData, setSortingData] = useState<any>(data);

    function changeValue(){
        setSortByDescending(!sortByDescending);
        if(Array.isArray(data)){
            if(sortByDescending && typeOFSort === 'number'){

                const newValue  = data.sort((a:any,b:any) => b[sortElement] - a[sortElement]);
                setSortingData(() => newValue);
            } else if(!sortByDescending && typeOFSort === 'number'){
                const newValue  = data.sort((a:any,b:any) => a[sortElement] - b[sortElement]);
                setSortingData(() => newValue);
            } else if(sortByDescending && typeOFSort === 'string'){
                const newValue = data.sort((a,b) => (a[sortElement] > b[sortElement]) ? 1 : ((b[sortElement] > a[sortElement]) ? -1 : 0));
                setSortingData(() => newValue);
            } else if(!sortByDescending && typeOFSort === 'string') {
                const newValue = data.sort((a,b) => (a[sortElement] < b[sortElement]) ? 1 : ((b[sortElement] < a[sortElement]) ? -1 : 0));
                setSortingData(() => newValue);
            }
        }
    }

    useEffect(()=>{
    },[data]);


    if(!sortingData && data){
        setSortingData(data);
    }


    return {sortingData, changeValue};
};
