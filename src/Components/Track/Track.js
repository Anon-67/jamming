import React from "react";
import "./Track.css"

function Track({ track }) {
    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button class="Track-action">Add</button>
        </div>
    )
}

export default Track