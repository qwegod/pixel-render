import data from "../../render/data.json";

import { createSlice } from "@reduxjs/toolkit";

export const playerPosXSlice = createSlice({
  name: "playerPosX",
  initialState: {
    value: +data.start[0],
  },
  reducers: {
    incrementX: (state) => {
      state.value++;
    },
    decrementX: (state) => {
      state.value--;
    },
  },
});

export const { incrementX, decrementX } = playerPosXSlice.actions;

export default playerPosXSlice.reducer;
