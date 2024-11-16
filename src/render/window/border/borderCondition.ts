import leftChecks from "./leftChecks.json";
import rightChecks from "./rightChecks.json";
import straightChecks from "./straightChecks.json";

import findCords from "../../methods/findCords";

const borderCondition = (
  x: number,
  y: number,
  border: number[][][],
  playerPosX: number,
  playerPosY: number,
  playerDirection?: number
): [boolean, string] => {
  let color: string = "";
  switch (playerDirection) {
    case 0:
      if (
        leftChecks.some((check) => {
          color = check.color;
          if (
            findCords(border, playerPosX + check.offset, playerPosY) &&
            x < check.maxX
          )
            return true;
          return false;
        }) ||
        rightChecks.some((check) => {
          color = check.color;
          if (
            findCords(border, playerPosX + check.offset, playerPosY) &&
            x > check.minX
          )
            return true;
          return false;
        })
      )
        return [true, color];
      else if (
        straightChecks.some((check, index) => {
          color = check.color;
          if (
            findCords(border, playerPosX, playerPosY - check.offset) &&
            y < 10 + index
          )
            return true;
          return false;
        })
      )
        return [true, color];
      break;
    case 90:
      if (
        leftChecks.some((check) => {
          color = check.color;
          if (
            findCords(border, playerPosX, playerPosY + check.offset) &&
            x < check.maxX
          )
            return true;
          return false;
        }) ||
        rightChecks.some((check) => {
          color = check.color;
          if (
            findCords(border, playerPosX, playerPosY + check.offset) &&
            x > check.minX
          )
            return true;
          return false;
        })
      )
        return [true, color];
      else if (
        straightChecks.some((check, index) => {
          color = check.color;

          if (
            findCords(border, playerPosX + check.offset, playerPosY) &&
            y < 10 + index
          )
            return true;
          return false;
        })
      )
        return [true, color];
      break;
    case 180:
      if (
        leftChecks.some((check) => {
          color = check.color;
          if (
            findCords(
              border,
              playerPosX + Math.abs(check.offset),
              playerPosY
            ) &&
            x < check.maxX
          )
            return true;
          return false;
        }) ||
        rightChecks.some((check) => {
          color = check.color;
          if (
            findCords(border, playerPosX - check.offset, playerPosY) &&
            x > check.minX
          )
            return true;
          return false;
        })
      )
        return [true, color];
      else if (
        straightChecks.some((check, index) => {
          color = check.color;
          if (
            findCords(border, playerPosX, playerPosY + check.offset) &&
            y < 10 + index
          )
            return true;
          return false;
        })
      )
        return [true, color];
      break;
    case 270:
      if (
        leftChecks.some((check) => {
          color = check.color;
          if (
            findCords(
              border,
              playerPosX,
              playerPosY + Math.abs(check.offset)
            ) &&
            x < check.maxX
          )
            return true;
          return false;
        }) ||
        rightChecks.some((check) => {
          color = check.color;
          if (
            findCords(border, playerPosX, playerPosY - check.offset) &&
            x > check.minX
          )
            return true;
          return false;
        })
      )
        return [true, color];
      else if (
        straightChecks.some((check, index) => {
          color = check.color;
          if (
            findCords(border, playerPosX - check.offset, playerPosY) &&
            y < 10 + index
          )
            return true;
          return false;
        })
      )
        return [true, color];
      break;
  }

  return [false, ""];
};

export default borderCondition;
