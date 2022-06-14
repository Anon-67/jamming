import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Track from "../Track/Track";
import "./Playlist.css"
import { updatePlaylistName } from "./PlaylistReducer";

function Playlist() {
    const tracks = useSelector(state => state.playlist.playlistTracks)
    const playlistName = useSelector(state => state.playlist.playlistName)
    const dispatch = useDispatch()


    const playlistMap = tracks.map(track => <Track track={track} component="playlist" />)

    function handleOnChange(name){
        dispatch(updatePlaylistName(name))
    }

    function handleSubmit(e){
        e.preventDefault()
        alert("submitted")

    }


    return (
        <div class="Playlist">
            <form className="track-form" onSubmit={(e) => handleSubmit(e)}>
                <input placeholder="Name your playlist..." value={playlistName} onChange={(e) => handleOnChange(e.target.value)} />
                {playlistMap}
                <button type="submit" class="Playlist-save">SAVE TO SPOTIFY</button>
            </form>
        </div>
    )
}

export default Playlist