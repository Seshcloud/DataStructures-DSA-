const readline = require("readline-sync");
const userDeatils=()=>{
    console.log('enter the values');
    let userArr=readline.promptCL()
    userArr=userArr.map(Number)
    const num=readline.question('enter the number')
    return {userArr,num}
    }

    const checkingArray=(array,num)=>{
        let temp
for (let i = 0; i < array.length; i++) {
 for (let j = array.length-1; j > 0; j--) {
    if(i==j){
        break
    }else{
         if(array[j]==num){
temp=array[j]
array[j]=array[j-1]
array[j-1]=temp
    }
    if(array[i]==num){
        temp=array[i]
        array[i]=array[j]
        array[j]=temp
    }
    }
 }
}
return array
    }

const {userArr,num}=userDeatils()

let checking=checkingArray(userArr,num)

console.log(checking);