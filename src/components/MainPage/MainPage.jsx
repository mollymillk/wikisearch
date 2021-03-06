import React from "react";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Header } from '../Header/Header'
import styles from './MainPage.module.css'
import { PageNavigation } from "../PageNavigation/PageNavigation";

const MainPage = () => {
    const [searchingResults, setSearchingResults] = useState([]);
    const [searchRequest, setSearchRequest] = useState('');
    const [searchRequestLanguage, setSearchRequestLanguage] = useState('en')

    const handleChange = event => {
        setSearchRequest(event.target.value);
    }

    const handleKeyPress = event => {
        if(event.key === 'Enter') {
            event.preventDefault();
        }
    }

    const getSearchingResults = async () => {
        try {
            let response = await fetch(`https://${searchRequestLanguage}.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=40&srsearch=${searchRequest}`);
            if (!response.ok ) {
                throw new Error (`This is an HTTP error: The status is ${response.status}`);
                
            } 
            response = await response.json();
            setSearchingResults(response.query.search);
            } catch(err) {
                setSearchingResults(null);
            } 
    }

    useEffect(() => {
        if (/[а-я]/i.test(searchRequest)) {
            setSearchRequestLanguage('ru')
        } else setSearchRequestLanguage('en')
        getSearchingResults();
    }, [searchRequest]);

    return (
        <div>
            <Header
            searchRequest={searchRequest}
            />
            <form>
                    <TextField 
                    className={styles.searchingInput}
                    id="standard-basic" 
                    label="Searching for..." 
                    variant="standard" 
                    type="text"
                    onChange={event => { handleChange(event) }}
                    onKeyPress={event => { handleKeyPress(event)}}
                    />
            </form>
            <div>
                <PageNavigation 
                searchingResults={searchingResults} 
                searchRequest={searchRequest}
                />
            </div>
        </div>
        )
   }

export default MainPage;