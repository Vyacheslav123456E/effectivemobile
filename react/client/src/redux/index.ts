import {configureStore} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import users from "./users";

export const store = configureStore({
    reducer: {
        users
    },
    devTools: true,
});
export const useStoreDispatch = () => useDispatch<typeof store.dispatch>()
export type RootState = ReturnType<typeof store.getState>