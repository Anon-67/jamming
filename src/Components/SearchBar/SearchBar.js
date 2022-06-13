import React, { useState } from "react";
import "./SearchBar.css"

function SearchBar() {
    const [searchValue, setSearchValue] = useState("")



    return (
        <div className="SearchBar">
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(searchValue)
            }}>
                <input placeholder="Enter A Song, Album, or Artist" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                <button className="SearchButton" type="submit">SEARCH</button>
            </form>
        </div>
    )
}

export default SearchBar