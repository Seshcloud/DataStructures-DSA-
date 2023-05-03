const plusOne = function(arr) {
    let carry = 1;
    let result = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        let sum = arr[i] + carry;
        console.log(sum);
        if (sum >= 10) {
            carry = 1;
            sum = 0;
        } else {
            carry = 0;
        }
        
        result.unshift(sum);
        console.log(result);
    }
    
    if (carry > 0) {
        result.unshift(carry);
    }
    
    return result;
};
 const array=[1,2,3,4,6]
 console.log(plusOne(array))