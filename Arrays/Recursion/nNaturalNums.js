function generateNaturals(n) {
    if (n === 1) {
      return [n];
    } else {
      const naturals = generateNaturals(n - 1);
      naturals.unshift(n);
      return naturals;
    }
  }

  const result = generateNaturals(100);
  console.log(result)