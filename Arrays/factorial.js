const factorial=num=>{
    let fact=1
    for (let i = 2; i <= num; i++) {
      fact=fact*i

    }
    return fact
}

console.log(factorial(5));
console.log(factorial(1));
console.log(factorial(2));