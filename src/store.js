import { configureStore } from "@reduxjs/toolkit"
import searchResultsReducer from "./Components/SearchResults/searchResultsSlice"
import playlistReducer from "./Components/Playlist/PlaylistReducer"




const store = configureStore({
    reducer: {
        searchResults: searchResultsReducer,
        playlist: playlistReducer

    }
})

export default store