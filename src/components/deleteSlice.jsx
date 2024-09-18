import { createSlice } from "@reduxjs/toolkit";


export const deleteSlice = createSlice({
    name:'delete',
    initialState:{
        id:''
    },
    reducers:{
        setDelete : (state ,action)=>{
            state.id=action.payload;
        },
        clearDelete :(state)=>{
            state.id='';
        }
    }

});

export const {setDelete , clearDelete} = deleteSlice.actions;

export default deleteSlice.reducer;