import { useState , useEffect } from 'react';

export const useRequest = <T >(url: string ,deps: string[] = []) => {
    const [data , setData] = useState<T | null>(null);
    const [isLoading , setIsLoading] = useState<boolean>(false);
    const [hasError , setHasError] = useState<boolean>(false);
    useEffect(()=> {
        async function getData():Promise<void>{
            setIsLoading(true);
            try{
                fetch(url)
                    .then(response => response.json())
                    .then(data =>  setData(data));
            } catch(e){
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    },deps);
    return {data, isLoading, hasError};
};
