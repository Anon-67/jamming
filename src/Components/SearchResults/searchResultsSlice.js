import {  createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import Spotify from "../../util/Spotify";


const resultsAdapter = createEntityAdapter()


const initialState = resultsAdapter.getInitialState({
    status: "idle",
    results: []
})

export const fetchResults = createAsyncThunk("searchReults/fetchResults", (searchValue) => Spotify.search(searchValue))

const slice = createSlice({
    name: "searchResults",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchResults.pending](state){
            state.status = "loading"
        },
        [fetchResults.fulfilled](state, action) {
            state.results = action.payload
            state.status = "idle"
        }
    }
})

export default slice.reducer

