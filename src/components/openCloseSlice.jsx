import { createSlice } from "@reduxjs/toolkit";

    

export const openCloseSlice = createSlice({
    name:'open',
    initialState :{
        value:false,
    },
    reducers:{
        changeOpen : (state)=>{
            if(state.value){
                state.value =false;
            }else{
                state.value =true;
            }
            
        },

    }
    ,

})

export const {changeOpen} =openCloseSlice.actions;
export default openCloseSlice.reducer;