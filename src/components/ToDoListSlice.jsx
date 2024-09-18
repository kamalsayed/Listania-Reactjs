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
            
        },
        toggleToDo :(state,action)=>{
            const todo = state.todos.find(todo =>todo.id === action.payload);
            todo.completed =!todo.completed;
        },
        toggleImportant :(state,action)=>{
            const todo = state.todos.find(todo =>todo.id === action.payload);
            todo.important =!todo.important;
        },
        removeToDo: (state ,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload);
        }
    }

});

export const {addToDo , toggleToDo ,toggleImportant ,removeToDo} = ToDoListSlice.actions;
export default ToDoListSlice.reducer;

