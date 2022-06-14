import React from "react";
import { useDispatch } from "react-redux";
import { addTrackToPlaylist } from "../Playlist/PlaylistReducer";
import "./Track.css"

function Track({ track }) {
    const dispatch = useDispatch()

    function handleClick(track){
        dispatch(addTrackToPlaylist(track))       
    }


    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button class="Track-action" onClick={() => handleClick(track)}>Add</button>
        </div>
    )
}

export default Track