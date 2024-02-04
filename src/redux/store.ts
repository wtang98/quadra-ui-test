import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "./slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { socketMiddleware } from "../utils/middleWare";
import { CustomSocket } from "../utils/customSocket";

export const store = configureStore({
    reducer: {
        fileReducer,
    },
    middleware: () =>
        [socketMiddleware(CustomSocket("ws://localhost:8080"))] as any,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
