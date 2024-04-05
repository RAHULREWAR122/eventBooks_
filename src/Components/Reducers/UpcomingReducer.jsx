import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    data :[],
    status: "",
    error: null
}

export const fetchUpcoming = createAsyncThunk(
    "upcoming" ,
    async(_ ,thunkApi)=>{
        try{
            const response = await axios.get("https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming"); 
            return response.data;
        }catch(err){
            console.log(err);
        }
    }
) 

const UpcomingSlice = createSlice({
     name: "upcoming",
     initialState : initialState,
     reducers:{},
     extraReducers :(builder)=>{
        builder
        .addCase(fetchUpcoming.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchUpcoming.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data = action.payload;
        })
        .addCase(fetchUpcoming.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.payload;
        });
     }
})


export const upcomingSlice = UpcomingSlice.reducer;
export const selector = (state)=> state.upcomingSlice;

