import { createAsyncThunk, createEntityAdapter, createSlice, current } from "@reduxjs/toolkit";
import Spotify from "../../util/Spotify";


const playlistAdapter = createEntityAdapter()


const initialState =  playlistAdapter.getInitialState({
    status: "idle",
    playlistName: "Playlist",
    playlistTracks: [],
    playlistUris: []
})


export const savePlaylist = createAsyncThunk("playlist/savePlaylist", ({ playlistName, playlistUris }) => {
    Spotify.savePlaylist(playlistName, playlistUris)
})

const slice = createSlice({
    name: "playlist",
    initialState,
    reducers: {
        addTrackToPlaylist(state, action){
            state.playlistTracks = [...state.playlistTracks, action.payload]
            state.playlistUris = [...state.playlistUris, action.payload.uri]
        },
        removeTrackFromPlaylist(state, action){
            state.playlistTracks = current(state.playlistTracks).filter(track => track !== action.payload)
            state.playlistUris = current(state.playlistUris.filter(uri => uri !== action.payload.uri))
        },
        updatePlaylistName(state, action) {
            state.playlistName = action.payload
        }
    },
    extraReducers: {
        [savePlaylist.pending](state) {
            state.status = "loading"
        },
        [savePlaylist.fulfilled](state){
            state.status = "idle"
        }
    }
})

const { addTrackToPlaylist, removeTrackFromPlaylist, updatePlaylistName } = slice.actions

export { addTrackToPlaylist, removeTrackFromPlaylist, updatePlaylistName}

export default slice.reducer