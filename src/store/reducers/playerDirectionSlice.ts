import { createSlice } from "@reduxjs/toolkit";

export const playerDirectionSlice = createSlice({
  name: "playerDirection",
  initialState: {
    value: 0,
  },
  reducers: {
    reset: (state) => {
      state.value = 0;
    },
    plus: (state) => {
      state.value += 90;
    },
    minus: (state) => {
      if (state.value === 0) state.value = 270;
      else state.value -= 90;
    },
  },
});

export const { reset, plus, minus } = playerDirectionSlice.actions;

export default playerDirectionSlice.reducer;
