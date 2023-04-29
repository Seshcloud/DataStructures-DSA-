const prime = (num) => {
  let result;
  if (num < 2) {
    return (result = "not prime");
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return (result = "not prime");
    }
  }
  return (result = "prime");
}

console.log(prime(6));