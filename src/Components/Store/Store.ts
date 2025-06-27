import { configureStore } from "@reduxjs/toolkit";
import DarkModeReducer from "../Slice/DarkMode";
import FooterAppearedReducer from "../Slice/FooterAppeared";
export const store = configureStore({
    reducer: {
        DarkMode: DarkModeReducer,
        FooterAppeared: FooterAppearedReducer,
    },
    });
    