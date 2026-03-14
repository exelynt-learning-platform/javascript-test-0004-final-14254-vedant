let n = 5;

for (let i = 0; i < n; i++) {
  let row = "";

  
  for (let s = 0; s < i; s++) {
    row += " ";
  }

  
  for (let j = 0; j < n - i; j++) {
    if (j == 0 || j == n - i - 1) {
      row += "1 ";
    } else {
      row += (n - i - 1) + " ";
    }
  }

  console.log(row);
}