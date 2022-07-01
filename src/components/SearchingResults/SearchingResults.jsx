import React from "react";
import { Link } from "@mui/material";
import { getCurrentPage } from "./getCurrentPage";
import './SearchingResults.css'

const SearchingResults = (props) => {
        const currentPageResults = getCurrentPage(props.pageNumber, props.items) 
    return (
        <div className="all_results">
            {currentPageResults &&
                currentPageResults.map(item => {
                    const url = `https://en.wikipedia.org/?curid=${item.pageid}`
                    return (
                        <div className="result_container">
                            <h3>
                                {item.title + ''}
                            </h3>
                            <Link 
                            href={url}
                            underline="hover"
                            >
                            Read more
                            </Link>
                            <p dangerouslySetInnerHTML={{__html:
                            item.snippet}}></p>
                            <hr 
                            align="center" 
                            width='700' 
                            color='#628096'
                            size='1'
                            >
                            </hr>
                        </div>
                )})}
        </div>
    )
}

export default SearchingResults;