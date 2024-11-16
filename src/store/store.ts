import { configureStore } from "@reduxjs/toolkit";

import playerPosXReducer from "./reducers/playerPosXSlice";
import playerPosYReducer from "./reducers/playerPosYSlice";
import playerDirectionReducer from "./reducers/playerDirectionSlice";

const store = configureStore({
  reducer: {
    playerPosX: playerPosXReducer,
    playerPosY: playerPosYReducer,
    playerDirection: playerDirectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
