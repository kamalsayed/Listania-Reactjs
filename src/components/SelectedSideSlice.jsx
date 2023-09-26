import { createSlice } from "@reduxjs/toolkit";

export const  SelectedSideSlice =createSlice({
    name:'selected',
    initialState:{
        choice : 'myday'
    },
    reducers:{
        selectSide: (state,action)=>{
            state.choice = action.payload;
        },
    },

});

export const {selectSide} = SelectedSideSlice.actions;
export default SelectedSideSlice.reducer;