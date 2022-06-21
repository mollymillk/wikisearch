import React from "react";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Header } from "./header/header";
import '../style/wiki.css'
import { PageNumber } from "./PageNumber/PageNumber";

export default function WikiApi() {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let [isChanged, setIsChanged] = useState(null);

    const toChange = event => {
        setValue(event.target.value);
        setIsChanged(true);
    }

    useEffect(() => {
        const getApi = async () => {
            try {
                let response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=40&srsearch=${value}`);
                console.log(value);
                if (!response.ok ) {
                    throw new Error (`This is an HTTP error: The status is ${response.status}`);
                    
                } 
                response = await response.json();
                setItems(response.query.search);
                setError(null);
                } catch(err) {
                    setError(err.message);
                    setItems(null);
                } finally {
                    setLoading(false);
                    setIsChanged(false);
                    console.log(isChanged);
                }
            }
        getApi();
    }, [value]);

    return (
        <div>
            <Header/>
            <form>
                    <TextField 
                    className="searchingInput"
                    id="standard-basic" 
                    label="Searching for..." 
                    variant="standard" 
                    type="text"
                    onChange={event => { toChange(event) }}
                    onSubmit={event => { toChange(event) }}
                    sx={{ m: 1, width: '700px' }}
                    />
            </form>
            <div>
                {loading && (console.log(`is ${loading}`))}
                {error && (
                    console.log(`There is a problem fetching the post data - ${error}`)
                
                )}
                <PageNumber 
                allItems={items} 
                value={value}
                isChanged={isChanged}
                />
            </div>
        </div>
        )
   }