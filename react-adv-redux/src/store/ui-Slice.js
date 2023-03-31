import { createSlice } from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name :'ui',
    initialState: {cartIsShown: false},
    reducers: {
        toggle(state){
            state.cartIsShown = !state.cartIsShown
        } 
    }

});

export const uiAction = uiSlice.actions;

export default uiSlice;
