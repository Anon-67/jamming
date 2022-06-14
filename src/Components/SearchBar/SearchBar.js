import React, { useState } from "react";
import "./SearchBar.css"
import { useDispatch } from "react-redux";
import { fetchResults } from "../SearchResults/searchResultsSlice";

function SearchBar() {
    const [searchValue, setSearchValue] = useState("")
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(fetchResults(searchValue))
        setSearchValue("")
    }



    return (
        <div className="SearchBar">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input placeholder="Enter A Song, Album, or Artist" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <button className="SearchButton" type="submit">SEARCH</button>
            </form>
        </div>
    )
}

export default SearchBar