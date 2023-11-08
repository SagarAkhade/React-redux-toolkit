// Here we have created the users slice

import { createSlice } from "@reduxjs/toolkit";
import { clearAllUsers } from "../actions";

const userSlice = createSlice({
    name:'user',
    initialState: [],
    reducers: {
        // Here all micro reducers will come
        addUser(state, action){
            state.push(action.payload);
            // console.log(action.payload);
        },
        removeUser(state, action){
            console.log(action.payload);
            state.splice(action.payload, 1);
        },
        deleteUsers(state, action) {
            return [];
        },
    },
    // Here is extraReducer function -> It is used by other slices 
    // - This extraReducer is depend on the UserSlice
    // extraReducers(builder){
    //     builder.addCase(userSlice.actions.deleteUsers, ()=>{
    //         return [];
    //     })
    // }

    // - Here we are creating the extraReducer which is completely independent of UserSlice
    extraReducers(builder) {
        builder.addCase(clearAllUsers, () => {
            return [];
        })
    }
})

// console.log(userSlice.actions)  //--> TO see the actions creator in slice

export default userSlice.reducer;

export const { addUser, removeUser, deleteUsers } = userSlice.actions;


// Extra notes 
// Array.splice(startIndex, deleteNumberOfCount, item1, item2, ...)
// item1, item2, -> Are added to the given startIndex