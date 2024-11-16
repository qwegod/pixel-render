const renderMapBorder = (x: number, y: number, tiles: JSX.Element[]) => {
  tiles.push(
    <div
      key={`${x}-${y}`}
      onClick={() => console.log(x, y)}
      className="h-[16px] w-[16px] bg-white"
    />
  );
};

export default renderMapBorder;
