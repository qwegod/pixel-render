const floorCondition = (y: number): number => {
  if (12 >= y && y >= 10) {
    return 2;
  } else if (16 >= y && y >= 13) {
    return 1;
  } else return 0;
};

export default floorCondition;
