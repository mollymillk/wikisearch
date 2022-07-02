export const getCurrentPageResults = (currentPageNumber, searchingResults) => {
    const start = 5 * ( currentPageNumber - 1);
    const end = (5 * currentPageNumber);  
    return searchingResults.slice(start, end)
}