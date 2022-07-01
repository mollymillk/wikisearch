import React from "react";
import { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { Header } from '../Header/Header'
import './MainPage.css'
import { PageNavigation } from "../PageNavigation/PageNavigation";

const MainPage = () => {
    const [items, setItems] = useState([]);
    const [value, setValue] = useState('');
    let [isChanged, setIsChanged] = useState(null);

    const toChange = event => {
        setValue(event.target.value);
        setIsChanged(true);
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            event.preventDefault();
        }
    }

    useEffect(() => {
        const getApi = async () => {
            try {
                let response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=40&srsearch=${value}`);
                if (!response.ok ) {
                    throw new Error (`This is an HTTP error: The status is ${response.status}`);
                    
                } 
                response = await response.json();
                setItems(response.query.search);
                } catch(err) {
                    setItems(null);
                } finally {
                    setIsChanged(false);
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
                    onKeyPress={event => { handleKeyPress(event)}}
                    sx={{ m: 1, width: '700px' }}
                    />
            </form>
            <div>
                <PageNavigation 
                allItems={items} 
                value={value}
                isChanged={isChanged}
                />
            </div>
        </div>
        )
   }

export default MainPage;