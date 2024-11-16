const renderBorder = (
  x: number,
  y: number,
  tiles: JSX.Element[],
  color: string
) => {
  switch (color) {
    case 'bg-orange-700':
      tiles.push(<div
        key={`${x}-${y}`}
        className={`h-[16px] w-[16px] bg-orange-700`}
        onClick={() => console.log(x, y)}
      />)
      break
    case `bg-red-950`:
      tiles.push(<div
        key={`${x}-${y}`}
        className={`h-[16px] w-[16px] bg-orange-950`}
        onClick={() => console.log(x, y)}
      />)
  }

};

export default renderBorder;
