import React from "react";
import { Link } from "@mui/material";
import { getCurrentPageResults } from "./getCurrentPageResults";
import styles from'./SearchingResults.module.css';

const SearchingResults = ({currentPageNumber, searchingResults}) => {
        const currentPageResults = getCurrentPageResults(currentPageNumber, searchingResults) 
    return (
        <div className={styles.allResults}>
            {currentPageResults &&
                currentPageResults.map(result => {
                    const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
                    const snippet = result.snippet.replace(/<[^>]*>/g, '') + '...'
                    return (
                        <div className={styles.resultContainer}>
                            <h3>
                                {result.title}
                            </h3>
                            <div 
                            className={styles.resultSnippet}>
                                {snippet}
                            </div>
                            <Link 
                            href={url}
                            underline="hover"
                            >
                            Read more
                            </Link>
                            <hr/>
                        </div>
                )})}
        </div>
    )
}

export default SearchingResults;