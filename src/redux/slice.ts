import { initialStateType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: initialStateType = {
    number: 0,
};

export const slice = createSlice({
    name: "slice",
    initialState,
    reducers: {
        updateNumber: (state, action: PayloadAction<number>) => {
            return {
                ...state,
                number: action.payload,
            };
        },
    },
});

export const { updateNumber } = slice.actions;
export default slice.reducer;
