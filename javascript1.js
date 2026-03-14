let n = 4;

for (let i = 0; i < 2 * n - 1; i++) {
  let row = "";

  for (let j = 0; j < 2 * n - 1; j++) {
    let min = Math.min(i, j, 2 * n - 2 - i, 2 * n - 2 - j);
    row += (n - min) + " ";
  }

  console.log(row);
}