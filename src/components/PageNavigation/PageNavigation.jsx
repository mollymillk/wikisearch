import React from "react";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import SearchingResults from "../SearchingResults/SearchingResults";
import './PageNavigation.css'

export const PageNavigation = (props) => {
    const [pageNumber, setPageNumber] = useState(1);
    
    useEffect(() => {
        setPageNumber(1)
    }, [props.isChanged]);

    const toChangeItems = event => {
        setPageNumber(event.target.value);
    } 

    if (props.allItems !== null && props.value !== null && props.value !== '') {

        let pages = [];
        const numberOfPages = props.allItems.length / 5;

        for (let number = 1; number <= numberOfPages; number++) {
            pages.push(number);
        }
        
        return (   
            <div className="resultPage">   
                <SearchingResults 
                value={props.value} 
                items={props.allItems}
                pageNumber={pageNumber}/>
                <div className="pageNumbers">
                {pages && 
                    pages.map((number) => {
                    return (
                    <div className="pageNumber">
                        <Button
                        onClick={event => {toChangeItems(event)}}
                        value={number}
                        >
                        {number}
                        </Button>
                    </div>
                    )})}
                </div>
            </div> 
            )
    }     
}