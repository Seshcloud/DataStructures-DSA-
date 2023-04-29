const oddNumber=arr=>{
    let odd=[]
    let highestNum=null
    for(let i=0;i<arr.length;i++){
    if(arr[i]%2===1){
    odd.push(arr[i])
    if(highestNum===null||arr[i]>highestNum){
    highestNum=arr[i]
    }
    }
    }
    return [odd,highestNum]
    }

const arr=[1,33,2,4,5,6,8,9,11,39,119]
const [odd,highestNum]=oddNumber(arr)

console.log(odd);
console.log(highestNum);