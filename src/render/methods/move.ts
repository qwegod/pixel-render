import collision from "./collision";

import { decrementY, incrementY } from "../../store/reducers/playerPosYSlice";
import { decrementX, incrementX } from "../../store/reducers/playerPosXSlice";
import { reset, plus, minus } from "../../store/reducers/playerDirectionSlice";

import { AppActions } from "../../store/types";
import { Dispatch } from "@reduxjs/toolkit";

function move(
  border: number[][][],
  lastKey: string,
  playerPosX: number,
  playerPosY: number,
  playerDirection: number,
  dispatch: Dispatch<AppActions>
) {
  if (!collision(border, playerPosX, playerPosY, lastKey, playerDirection)) {
    if (lastKey) {
      switch (lastKey) {
        case "w":
          if (playerDirection === 0) dispatch(decrementY());
          else if (playerDirection === 180) dispatch(incrementY());
          else if (playerDirection === 270) dispatch(decrementX());
          else if (playerDirection === 90) dispatch(incrementX());
          else dispatch(decrementX);
          break;
        case "s":
          if (playerDirection === 0) dispatch(incrementY());
          else if (playerDirection === 180) dispatch(decrementY());
          else if (playerDirection === 270) dispatch(incrementX());
          else if (playerDirection === 90) dispatch(decrementX());
          else dispatch(incrementX());
          break;
        case "d":
          if (playerDirection === 360) {
            dispatch(reset());
          } else {
            if (playerDirection + 90 === 360) dispatch(dispatch(reset()));
            else dispatch(plus());
          }
          break;
        case "a":
          dispatch(minus());
          break;
      }
    }
  }
  return null;
}

export default move;
