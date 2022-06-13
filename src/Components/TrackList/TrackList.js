import React from "react";
import { useSelector } from "react-redux";
import Track from "../Track/Track";
import "./TrackList.css"

function TrackList() {
    const searchResults = useSelector(state => state.searchResults.searchResults)
    console.log(searchResults)


    const trackMap = searchResults.map((track) => <Track key={track.id} track={track} />)

    return (
        <div className="TrackList">
            {trackMap}
        </div>
    )
}

export default TrackList