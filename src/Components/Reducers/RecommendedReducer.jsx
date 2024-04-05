import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    data :[],
    status: "",
    error: null
}

export const fetchRecommended = createAsyncThunk(
    "recommended" ,
    async(_ ,thunkApi)=>{
        try{
            const response = await axios.get("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"); 
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
) 

const RecommendedSlice = createSlice({
     name: "recommended",
     initialState : initialState,
     reducers:{},
     extraReducers :(builder)=>{
        builder
        .addCase(fetchRecommended.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchRecommended.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
        })
        .addCase(fetchRecommended.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        });
     }
})

export const recommendedSlice = RecommendedSlice.reducer;
export const selector = (state)=> state.recommendedSlice;