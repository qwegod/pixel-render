const renderFloor = (
  x: number,
  y: number,
  condition: number,
  tiles: JSX.Element[]
) => {
  if (condition === 2) {
    tiles.push(
      <div
        key={`${x}-${y}`}
        className="h-[16px] w-[16px] bg-gray-700"
        onClick={() => console.log(x, y)}
      />
    );
  } else if (condition === 1) {
    tiles.push(
      <div
        key={`${x}-${y}`}
        className="h-[16px] w-[16px] bg-gray-600"
        onClick={() => console.log(x, y)}
      />
    );
  }
};

export default renderFloor;
