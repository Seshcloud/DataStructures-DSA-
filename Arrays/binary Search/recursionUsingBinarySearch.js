const recursiveBinary=(arr,target)=>{
    return search(arr,target,0,arr.length-1)
    }
    
    const search=(arr,target,left,right)=>{
    if(left>right){
        return -1
    }
    let middle=Math.round((left+right)/2)
    
    if(arr[middle]===target){
        return middle
    }
    if(arr[middle]>target){
    return search(arr,target,left,middle-1)
    }else{
        return search(arr,target,middle+1,right)
    }
    }
    
    const array=[-5,2,4,6,10,100]
    const target=48
    console.log(recursiveBinary(array,target));