export type PlayerPosXActions =
  | { type: "playerPosX/incrementX" }
  | { type: "playerPosX/decrementX" };

export type PlayerPosYActions =
  | { type: "playerPosY/incrementY" }
  | { type: "playerPosY/decrementY" };

export type PlayerDirectionActions =
  | { type: "playerDirection/reset" }
  | { type: "playerDirection/plus" }
  | { type: "playerDirection/minus" };

export type AppActions =
  | PlayerPosXActions
  | PlayerPosYActions
  | PlayerDirectionActions;
