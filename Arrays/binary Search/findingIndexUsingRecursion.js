//finding index of the array given a target value ,if the value not found return were it is to be inserted

const searchInsert = function(nums, target) {
    let left =0
    let right=nums.length-1
  return  binary(nums,target,left,right)
};

const binary=(arr,target,left,right)=>{
        if (left > right) {
            return left;
        }
         let middle=Math.floor((left+right)/2)

         if(arr[middle]===target){
             return middle
         }
         if(arr[middle]>target){
           return  binary(arr,target,left,middle-1)
         }else{
          return   binary(arr,target,middle+1,right)
         }

 }

 const nums=[1,3,5,6]
 const target=4

 console.log(searchInsert(nums,target));