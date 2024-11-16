import data from "../../render/data.json";

import { createSlice } from "@reduxjs/toolkit";

export const playerPosYSlice = createSlice({
  name: "playerPosY",
  initialState: {
    value: +data.start[1],
  },
  reducers: {
    incrementY: (state) => {
      state.value++;
    },
    decrementY: (state) => {
      state.value--;
    },
  },
});

export const { incrementY, decrementY } = playerPosYSlice.actions;

export default playerPosYSlice.reducer;
