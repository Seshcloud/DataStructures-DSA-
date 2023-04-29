const array=[1,2,6,3,7,1,2,5,1,3]

const arrayCount=arr=>{
  let count={}
for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if(count[element]){
    count[element]++
  }else{
    count[element]=1
  }
}

return count
}

console.log(arrayCount(array));