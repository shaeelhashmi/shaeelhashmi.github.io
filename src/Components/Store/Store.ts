import { configureStore } from "@reduxjs/toolkit";
import DarkModeReducer from "../Slice/DarkMode";
export const store = configureStore({
    reducer: {
        DarkMode: DarkModeReducer,
    },
    });
    