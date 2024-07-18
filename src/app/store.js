import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "../features/playerSlice";
import titularSlice from "../features/titularSlice";

export const store=configureStore({
    reducer:{
        players: playerReducer,
        titulares: titularSlice
    }
})