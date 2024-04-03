import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items:["bananas", "apples"]
    },
    reducers : {
        addItem : (state, action) => {
            state.items.push(action.payload);
        },
        clearCart : (state) => {
            state.items = [];
        },
        removeItem : (state, action) => {
            state.items = state.items.filter(x => x !== action.payload);
        }
    }
});

export const {addItem, clearCart, removeItem} = cartSlice.actions;

export default cartSlice.reducer;