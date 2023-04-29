const fibbnacci=(num)=>{
    if(num<2){
        return num
    }
return fibbnacci(num-1)+fibbnacci(num-2)
}
console.log(fibbnacci(1));
console.log(fibbnacci(2));
console.log(fibbnacci(6));
