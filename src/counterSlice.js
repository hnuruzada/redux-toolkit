import { createSlice } from "@reduxjs/toolkit";


const initialState={
    value:0
}



const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value=state.value+1
        },
        decrement:(state)=>{
            state.value=state.value-1
        },
        incrementByUser:(state,actions)=>{
            state.value=state.value+actions.payload
        }

    }
})

export const {increment,decrement,incrementByUser}=counterSlice.actions

export default counterSlice.reducer

