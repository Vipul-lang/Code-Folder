// function isPalindrome(str)
// {
// let left=0;
// let right=str.length-1;
// while(left<right)
// {
//     if(str[left]!==str[right])
//     {
//         return false;
//     }
//     left++;
//     right--;
// }
// return true;
// }
// console.log(isPalindrome("icici"));
 
function isPalindrome(num)
{
let original=num;  
let reverse=0;

while(num>0)
{
    reverse=reverse*10+(num%10);
    num=Math.floor(num/10);
}
    return reverse===original;

}
console.log(isPalindrome(121));



