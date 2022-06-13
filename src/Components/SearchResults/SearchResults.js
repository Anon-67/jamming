import React from "react";
import { useSelector } from "react-redux";
import TrackList from "../TrackList/TrackList";
import "./SearchResults.css"


function SearchResults() {


    return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList />
        </div>
    )
}

export default SearchResults