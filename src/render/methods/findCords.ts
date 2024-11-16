function findCords(border: number[][][], x: number, y: number): boolean {
  return border.some((subArray) =>
    subArray.some(
      (innerArray: number[]) => innerArray[0] === x && innerArray[1] === y
    )
  );
}

export default findCords;
