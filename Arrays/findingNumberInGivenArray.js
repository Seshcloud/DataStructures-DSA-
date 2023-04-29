
const findingIndex=(arr,t)=>{
    for(let i=0;i<arr.length;i++){
    if(arr[i]==t){
    return i
    }
    }
    return -1
    }

    const array=[1,20,30,6,4,5]
    const target=5
    console.log(findingIndex(array,target));