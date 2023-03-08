function sumOfDivided(lst) {
  const primes = lst.reduce((acc, num) => {
    for (let i = 2; i <= Math.abs(num); i++) {
      if (num % i === 0 && isPrime(i)) {
        acc[i] = true;
      }
    }
    return acc;
  }, {});
  
  return Object.keys(primes).sort((a, b) => a - b).map(prime => {
    const sum = lst.filter(num => num % prime === 0).reduce((acc, num) => acc + num, 0);
    return [+prime, sum];
  });
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
