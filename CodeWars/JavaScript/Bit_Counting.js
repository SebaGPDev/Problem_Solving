const countBits = (num) => {
  let decimal = parseFloat(num);
  let decimalToBinary = decimal.toString(2);
  let array = decimalToBinary.split("");
  let suma = 0;
  array.forEach((element) => {
    if (element == 1) {
      suma += 1;
    }
  });
  return console.log(suma);
};

countBits(4);
