
const secondLargest=arr=>{
    let highest=0
    let secondHighest=0
  for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
  if(highest<arr[i]){
    secondHighest = highest;
    highest=arr[i]
  }else if(secondHighest<arr[i]&&arr[i]<highest){
    secondHighest=arr[i]
  }
    }
  }
  console.log(highest);
  return secondHighest
  }
  
  const array=[9,8,2,4,10,29,56]
  
  console.log(secondLargest(array));