function firstpeak(arr)
{
    for(let i=1;i<arr.length-1;i++)
    {
        if(arr[i]>arr[i-1] && arr[1]>arr[i+1])
        {
            return arr[i];
        }
    }
}
console.log(firstpeak([1,3,2,4,1]));
