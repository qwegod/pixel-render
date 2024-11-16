import data from "./data.json";

import findCords from "./methods/findCords";

import calculateBorder from "./window/border/calculateBorder";
import renderBorder from "./window/border/renderBorder";
import borderCondition from "./window/border/borderCondition";

import renderFloor from "./window/floor/renderFloor";
import floorCondition from "./window/floor/floorCondition";

import renderBackground from "./window/background/renderBackground";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";

import renderMapBorder from "./map/renderMapBorder";
import renderMapPlayer from "./map/renderMapPlayer";
import renderMapBackground from "./map/renderMapBackground";

function useRender() {
  const playerPosX = useSelector((state: RootState) => state.playerPosX.value);
  const playerPosY = useSelector((state: RootState) => state.playerPosY.value);
  const playerDirection = useSelector(
    (state: RootState) => state.playerDirection.value
  );

  const border: number[][][] = calculateBorder(
    data.border.map((border) =>
      border.map((cords) => cords.map((cord) => +cord))
    )
  );

  const getBorder = () => border;

  const render = () => {
    let tiles: JSX.Element[] = [];
    for (let y = 1; y <= 16; y++) {
      for (let x = 1; x <= 32; x++) {
        const borderData = borderCondition(
          x,
          y,
          border,
          playerPosX,
          playerPosY,
          playerDirection
        );
        const floorData = floorCondition(y);

        if (borderData[0]) renderBorder(x, y, tiles, borderData[1]);
        else if (floorData) renderFloor(x, y, floorData, tiles);
        else renderBackground(x, y, tiles);
      }
    }
    return tiles;
  };

  function mapRender(playerPosX: number, playerPosY: number) {
    let tiles: JSX.Element[] = [];

    for (let y = 1; y <= 16; y++) {
      for (let x = 1; x <= 32; x++) {
        if (findCords(border, x, y)) renderMapBorder(x, y, tiles);
        else if (playerPosX === x && playerPosY === y)
          renderMapPlayer(x, y, playerDirection, tiles);
        else renderMapBackground(x, y, tiles);
      }
    }
    return tiles;
  }

  return { render, mapRender, getBorder };
}

export default useRender;
