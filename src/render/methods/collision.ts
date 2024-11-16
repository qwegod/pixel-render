function collision(
  border: number[][][],
  playerPosX: number,
  playerPosY: number,
  lastKey: string,
  playerDirection: number
): boolean {
  let isBlocked: boolean | null = null;
  outerLoop: for (let i = 0; i < border.length; i++) {
    for (const path of border[i]) {
      if (lastKey) {
        switch (lastKey) {
          case "w":
            if (
              (playerPosY - 1 === path[1] &&
                playerPosX === path[0] &&
                playerDirection === 0) ||
              (playerPosY === path[1] &&
                playerPosX + 1 === path[0] &&
                playerDirection === 90) ||
              (playerPosY + 1 === path[1] &&
                playerPosX === path[0] &&
                playerDirection === 180) ||
              (playerPosY === path[1] &&
                playerPosX - 1 === path[0] &&
                playerDirection === 270)
            ) {
              isBlocked = true;
              break outerLoop;
            }
            break;
          case "s":
            if (
              (playerPosY + 1 === path[1] &&
                playerPosX === path[0] &&
                playerDirection === 0) ||
              (playerPosY === path[1] &&
                playerPosX - 1 === path[0] &&
                playerDirection === 90) ||
              (playerPosY - 1 === path[1] &&
                playerPosX === path[0] &&
                playerDirection === 180) ||
              (playerPosY === path[1] &&
                playerPosX + 1 === path[0] &&
                playerDirection === 270)
            ) {
              isBlocked = true;
              break outerLoop;
            }
            break;
        }
      }
    }
  }

  return isBlocked === null ? false : true;
}

export default collision;
