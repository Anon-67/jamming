import { configureStore } from "@reduxjs/toolkit"
import searchResultsReducer from "./Components/SearchResults/searchResultsSlice"




const store = configureStore({
    reducer: {
        searchResults: searchResultsReducer

    }
})

export default store