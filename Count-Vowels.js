function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";

  for (let i=0;i<str.length-1;i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Gekkforgeeks")); // 3
