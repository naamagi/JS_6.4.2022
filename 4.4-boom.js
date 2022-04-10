function boom(n) {
  let stringOfNumbers = "";
  for (let i = 1; i <= n; i++) {
    if (i.toString().includes(7) && i % 7 === 0) {
      stringOfNumbers += "BOOM-BOOM";
    } else if (i % 7 === 0) {
      stringOfNumbers += "BOOM";
    } else {
      stringOfNumbers += i.toString();
    }
    if (i < n) {
      stringOfNumbers += ",";
    }
  }
  console.log(stringOfNumbers);
}

boom(18);
