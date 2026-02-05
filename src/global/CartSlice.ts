import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICart, ICartState } from "../models/Interfaces";

const initialState: ICartState = {
    items: localStorage.getItem("shopCart") ? 
        JSON.parse(localStorage.getItem("shopCart")
    || "") : []
};

export interface NUM { 
    id: number, 
    quantity: number 
};

const CartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<ICart>) => {
            const indexItem = state.items.find(
                (item) => item.id === action.payload.id);
            if (indexItem) {
                indexItem.quantity! + 1;
            } else {
                state.items.push({
                    ...action.payload,
                    quantity: 1
                })
            };
            localStorage.setItem("shopCart", 
                JSON.stringify(state.items));
        },
        sub: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload);
            localStorage.setItem("shopCart", 
                JSON.stringify(state.items));
        },
        upQty: (state, action: PayloadAction<NUM>) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            };
            localStorage.setItem("shopCart", 
                JSON.stringify(state.items));
        },
        clear: (state) => {
            state.items = [],
            localStorage.removeItem("shopCart");
        }
    }
});

export const ACT = CartSlice.actions;
export const CartReducer = CartSlice.reducer;



