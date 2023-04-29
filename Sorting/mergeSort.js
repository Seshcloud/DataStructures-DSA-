const mergeSort=arr=>{
if(arr.length<2){
    return arr
}

let mid=Math.floor(arr.length/2)
const leftArr=arr.slice(0,mid)
const rightArr=arr.slice(mid)

return merge(mergeSort(leftArr),mergeSort(rightArr))
}

const merge=(left,right)=>{
let sortedArr=[]
while(left.length&&right.length){
    if(left[0]<right[0]){
        sortedArr.push(left.shift())
    }else{
        sortedArr.push(right.shift())
    }
}
return [...sortedArr,...left,...right]
}

const array=[10,30,5,7,8,2]

console.log(mergeSort(array))

 