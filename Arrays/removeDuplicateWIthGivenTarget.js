
var removeElement = function(nums, val) {
    if(!nums||nums.length===0){
return o
    }

    let k=0
    let i=0
    while(i<nums.length){
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
          }
        i++
    }
    return k
};
const nums=[0,1,2,2,3,0,4,2]
const val=2
console.log(removeElement(nums,val),nums);