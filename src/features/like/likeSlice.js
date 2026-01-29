import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const likeSlice = createSlice({
    name: 'liked',
    initialState,
    reducers: {
        toggleLike: (state, action) => {
            const roomId = action.payload;
            state[roomId] = !state[roomId];
        }
    }
})


export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;