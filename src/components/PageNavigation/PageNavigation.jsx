import React from "react";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import SearchingResults from "../SearchingResults/SearchingResults";
import styles from './PageNavigation.module.css'

export const PageNavigation = ({searchingResults, searchRequest}) => {
    const [currentPageNumber, setCurrentPageNumber] = useState(1);
    
    useEffect(() => {
        setCurrentPageNumber(1)
    }, [searchRequest]);

    if (searchingResults !== null && searchRequest !== null && searchRequest !== '') {

        const pages = [];
        const pageNumbers = searchingResults.length / 5;

        for (let pageNumber = 1; pageNumber <= pageNumbers; pageNumber++) {
            pages.push(pageNumber);
        }
        
        return (   
            <div className={styles.resultPage}>   
                <SearchingResults 
                searchingResults={searchingResults}
                currentPageNumber={currentPageNumber}/>
                <div className={styles.pageNumbers}>
                {pages && 
                    pages.map((pageNumber) => {
                    return (
                    <div className={styles.pageNumber}>
                        <Button
                        onClick={event => {setCurrentPageNumber(event.target.value)}}
                        value={pageNumber}
                        >
                        {pageNumber}
                        </Button>
                    </div>
                    )})}
                </div>
            </div> 
        )
    }     
}

