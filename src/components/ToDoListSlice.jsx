import { createSlice } from "@reduxjs/toolkit";

export const ToDoListSlice = createSlice({
    name:'todo',
    initialState :{
        todos : []
    },
    reducers:{
        addToDo :(state , action)=>{
            state.todos.push({
                id:action.payload.id,
                text:action.payload.text,
                important:false,
                completed:false
            })
            console.log(state.todos[0]);
        },
        toggleToDo :(state,action)=>{
            const todo = state.todos.find(todo =>todo.id === action.payload);
            todo.completed =!todo.completed;
        },
        toggleImportant :(state,action)=>{
            const todo = state.todos.find(todo =>todo.id === action.payload);
            todo.important =!todo.important;
        }
    }

});

export const {addToDo , toggleToDo ,toggleImportant} = ToDoListSlice.actions;
export default ToDoListSlice.reducer;

