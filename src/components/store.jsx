import {configureStore } from '@reduxjs/toolkit';
import openReducer from './openCloseSlice';
import selectedSideReducer from './SelectedSideSlice';
import addTaskReducer from './addTaskSlice';
import toDoReducer from './ToDoListSlice';

const reducer = (state, action) => {
  // The reducer function updates the state based on the action.
  
  return state;
};

export const store = configureStore({
    reducer:{
      open:openReducer,
      selectedSide:selectedSideReducer,
      showTask: addTaskReducer,
      todolist:toDoReducer,
    },

});