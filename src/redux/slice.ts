import { combineReducers, createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
    value: valueTypes;
};
type valueTypes = {
    number: number;
};
const initialState = {
    value: {
        number: 0,
    },
} as initialState;

export const slice = createSlice({
    name: "connect",
    initialState,
    reducers: {
        updateNumber: (state, action: PayloadAction<number>) => {
            return {
                value: {
                    number: action.payload,
                },
            };
        },
    },
});

export const { updateNumber } = slice.actions;
export default slice.reducer;
