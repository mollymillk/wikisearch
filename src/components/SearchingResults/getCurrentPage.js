export const getCurrentPage = (currentPageNumber, allItems) => {
    let start = 5 * ( currentPageNumber - 1);
    let end = (5 * currentPageNumber);  
    return allItems.slice(start, end)
}