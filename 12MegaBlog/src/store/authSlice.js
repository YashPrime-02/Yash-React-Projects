import { createSlice } from "@reduxjs/toolkit";

// initialState is a default state, which will be used when state is not provided in the dispatch function
const initialState={
   status: false,
   userData: null
}

const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:( state,action) =>{
            state.status=true;
            state.userData=action.payload;
        },

        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    
    
    } // individual function iske are used to know state of functions

})
export const {login, logout} =authSlice.actions;
export default authSlice.reducer;

//slice is used to check if the user is authentic or not