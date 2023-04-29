const fibbnacci=num=>{
    const fib=[1,0]
    for (let i = 2; i <= num; i++) {
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}

console.log(fibbnacci(2));
console.log(fibbnacci(3));
console.log(fibbnacci(6));