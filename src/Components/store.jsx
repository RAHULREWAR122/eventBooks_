import { configureStore } from "@reduxjs/toolkit";
import { recommendedSlice } from "./Reducers/RecommendedReducer";
import { upcomingSlice } from "./Reducers/UpcomingReducer";


export const store = configureStore({
    reducer:{
        recommendedSlice,
        upcomingSlice
    }
})