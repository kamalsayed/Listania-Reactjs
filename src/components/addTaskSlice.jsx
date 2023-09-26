import { createSlice } from "@reduxjs/toolkit";

export const AddTaskSlice = createSlice({
    name:'focus',
    initialState:{
        display:'none',
    },
    reducers:{
        changeFocus: (state)=>{
            if(state.display=='none'){
                state.display='grid';
            }else{
                state.display='none';
            }

        },
    },
});

export const {changeFocus} = AddTaskSlice.actions;

export default AddTaskSlice.reducer;
