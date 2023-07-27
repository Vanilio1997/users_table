export const getPagesArr = (lastPageNumber:number): number[] => {
    const arr =[];

    for(let i = 1; i <= lastPageNumber; i++){
        arr.push(i);
    }

    return arr;
};
