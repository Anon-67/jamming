import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrackToPlaylist, removeTrackFromPlaylist } from "../Playlist/PlaylistReducer";
import "./Track.css"

function Track({ track, component }) {
    const playlist = useSelector(state => state.playlist)
    const dispatch = useDispatch()

    function handleClick(track, add){
        if (add === "playlist"){
            dispatch(removeTrackFromPlaylist(track))
            console.log(playlist)

        } else {
            dispatch(addTrackToPlaylist(track))
        }

               
    }


    return (
        <div className="Track">
            <div className="Track-information">
                <h3>{track.name}</h3>
                <p>{track.artist} | {track.album}</p>
            </div>
            <button class="Track-action" onClick={() => handleClick(track, component)}>{component === "playlist" ? "-" : "+"}</button>
        </div>
    )
}

export default Track