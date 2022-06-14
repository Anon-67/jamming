import { createSlice, current } from "@reduxjs/toolkit";


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
        },
        removeTrackFromPlaylist(state, action){
            state.playlistTracks = current(state.playlistTracks).filter(track => track !== action.payload)
        },
        updatePlaylistName(state, action) {
            state.playlistName = action.payload

        }
    }
})

const { addTrackToPlaylist, removeTrackFromPlaylist, updatePlaylistName } = slice.actions

export { addTrackToPlaylist, removeTrackFromPlaylist, updatePlaylistName}

export default slice.reducer