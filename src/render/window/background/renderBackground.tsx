const renderBackground = (x: number, y: number, tiles: JSX.Element[]) => {
  tiles.push(
    <div
      key={`${x}-${y}`}
      className="h-[16px] w-[16px] bg-orange-950"
      onClick={() => console.log(x, y)}
    />
  );
};

export default renderBackground;
