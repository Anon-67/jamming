import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: [{name: "name1", artist: "artist1", album: "album1", id: 1},{name: "name2", artist: "artist2", album: "album2", id: 2},{name: "name3", artist: "artist3", album: "album3", id: 3}]
}

const slice = createSlice({
    name: "searchResults",
    initialState
})

export default slice.reducer

