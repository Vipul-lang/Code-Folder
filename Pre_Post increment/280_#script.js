let n="20";

console.log(n+1); 
                // String concatenation "20" + 1 → "201"

console.log(++n); 
                // ++n (pre-increment) means:
                // Convert n to a number (Number(n) = 20).
                // Increment it (20 + 1 = 21).
                // Return the incremented value (21).
                // Now, n is updated to 21 (as a number)
console.log(n++); 
                // n++ (post-increment) means:
                // Return the current value of n (21).
                // Then increment n by 1 (n = 22).
                // The returned value is 21, but n is now 22 for future operations.
