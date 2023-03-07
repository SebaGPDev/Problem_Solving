const fibonacci = (n, m = []) => {
  if (m[n]) {
    return m[n];
  }
  if (n >= 2) {
    return (m[n] = fibonacci(n - 1, m) + fibonacci(n - 2, m));
  }
  return n;
};
