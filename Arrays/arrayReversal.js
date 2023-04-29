const arrays=[2,3,4,56,7,8,0]

const arrayReversal=(arrays)=>{
let temp
let firstIndex=0,
lastIndex=arrays.length-1
while(firstIndex<lastIndex){
temp=arrays[firstIndex]
arrays[firstIndex]=arrays[lastIndex]
arrays[lastIndex]=temp

firstIndex++
lastIndex--
}
return arrays
}

console.log(arrayReversal(arrays))