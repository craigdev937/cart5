import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { DAPI } from "./DAPI";
import { CartReducer } from "./CartSlice";

export const RED = configureStore({
    reducer: {
        [DAPI.reducerPath]: DAPI.reducer,
        cart: CartReducer,
    },
    middleware: (gDM) => gDM().concat(DAPI.middleware)
});

setupListeners(RED.dispatch);
export type RootState = ReturnType<typeof RED.getState>;
export type AppDispatch = typeof RED.dispatch;


