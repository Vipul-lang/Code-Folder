let arr=[10, 45, 2, 99, 23];
let min=arr[0]

for(let i=0;i<arr.length-1;i++)
{
    if(arr[i]<min)
    {
        min=arr[i];
    }
}

let result=Math.min(...arr)
console.log(result);
