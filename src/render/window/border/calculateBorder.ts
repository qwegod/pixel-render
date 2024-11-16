function calculateBorder(border: number[][][]): number[][][] {
  let calculatedBorder: number[][][] = [];
  let cords: number[][] = [];
  for (let i = 0; i < border.length; i++) {
    for (let x = border[i][1][0]; x <= border[i][0][0]; x++) {
      for (let y = border[i][1][1]; y <= border[i][0][1]; y++) {
        cords.push([x, y]);
      }
    }
    calculatedBorder.push(cords);
    cords = [];
  }
  return calculatedBorder;
}

export default calculateBorder;
