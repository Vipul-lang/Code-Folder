// // function fact(n)
// // {
// n=5
// let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result *= i;
//     // console.log(result);
    
//   }
//     console.log(result);
    
// // }

// //   console.log(fact(5));
  
function fact(num)
{
  let res=1;
  while(num>0)
  {
    res=res*num
    num--;
  } 
  console.log(res);
}
fact(5)