import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    playlistName: "Playlist",
    playlistTracks: []
}

const slice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        addTrackToPlaylist(state, action){
            state.playlistTracks = [...state.playlistTracks, action.payload]
        }
    }
})

const { addTrackToPlaylist } = slice.actions

export { addTrackToPlaylist}

export default slice.reducer