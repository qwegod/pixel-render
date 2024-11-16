const renderMapBackground = (x: number, y: number, tiles: JSX.Element[]) => {
  tiles.push(
    <div
      key={`${x}-${y}`}
      onClick={() => console.log(x, y)}
      className="h-[16px] w-[16px] bg-black"
    />
  );
};

export default renderMapBackground;
