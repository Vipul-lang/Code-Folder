let num=1;

const sum=++num + num++;
// ++num means increment num first, then use it.
// num was 1, so after ++num, it becomes 2.
// Now, ++num evaluates to 2.

// num++ means use num first, then increment it.
// Since num is now 2, num++ returns 2, then num increments to 3.
console.log(sum);


// Pre-Increment work likes
// num = num + 1;  // First, increment num
// return num;      // Then, return the updated value

// Pre-Increment work likes
// let temp = num;   // Store current value in temp
// num = num + 1;    // Increment num
// return temp;      // Return old value (before increment)
