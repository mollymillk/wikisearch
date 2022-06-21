export const getPart = (pageNumber, allItems) => {
    let partlyItems = [];
    let start = 5 * (pageNumber - 1);
    let end = (5 * pageNumber);
    partlyItems.push(allItems.slice(start, end));
    return partlyItems[0];
}