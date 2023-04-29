const arrayDuplicates=(arr)=>{
    let newArr=[]
    let hash={}
    let highest=null
   for(let i=0;i<arr.length;i++){
        if(!hash[arr[i]]){
            newArr.push(arr[i])
            hash[arr[i]]=true
             if(highest===null||arr[i]>highest){
            highest=arr[i]
        }
        }
    }

    return {highest,newArr}

}

const array=[1,2,39,4,5,1,5,5,92,200]

console.log(arrayDuplicates(array));