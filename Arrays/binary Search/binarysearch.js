
const findingIndexWithBinarySearach=(arr,target)=>{
    if(arr.length===0){
        return -1
    }
    let left=0
    let right=arr.length-1
    while(left<=right){
    const middle=Math.floor((left+right)/2)//6/2=3

    if(arr[middle]==target){
    return middle
    }
    if(arr[middle]>target){
    right=middle-1
    }else{
    left=middle+1
    }
    }
    return -1
    }

    const arr=[1,4,6,8,10,12,20,30]
    const target=6
    console.log(findingIndexWithBinarySearach(arr,target))