import clsx from "clsx";

const renderMapPlayer = (
  x: number,
  y: number,
  playerDirection: number,
  tiles: JSX.Element[]
) => {
  tiles.push(
    <div
      key={`${x}-${y}`}
      onClick={() => console.log(x, y)}
      className={clsx(
        "h-[16px] w-[16px] bg-green-500 border-red-500",
        playerDirection === 0 && "border-t-8",
        playerDirection === 90 && "border-r-8",
        playerDirection === 180 && "border-b-8",
        playerDirection === 270 && "border-l-8"
      )}
    />
  );
};

export default renderMapPlayer;
