const countBits = (num) => {
  if (num) {
    return num.toString(2).match(/1/g).length;
  }
  return 0;
};
