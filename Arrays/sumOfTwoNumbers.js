const readline = require("readline-sync");
const userDeatils=()=>{
console.log('enter the values');
let userArr=readline.promptCL()
const num=readline.question('enter the number')
userArr=userArr.map(Number)
return {userArr,num}
}

const addAndfind=(arr,num)=>{
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
       const sum=arr[i]+arr[j]
       if(sum==num){
        return [arr[i],arr[j]]
       }
    }
}
return "none"
}

const {userArr,num}=userDeatils()

const arry=addAndfind(userArr,num)

console.log(`the numbers which add up together and from ${num} are ${arry[0]} and ${arry[1]}`);