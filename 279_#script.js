let name="js";
// In JavaScript, strings are immutable, meaning their characters cannot be modified directly.
// name[1]="q";
// You are trying to modify the second character (name[1] which is "s") and replace it with "q".
// However, since strings are immutable, this does nothing—no error is thrown, but the string remains unchanged.
console.log(name);
name="q";
// Now, you are reassigning name to the new string "q".
// This completely replaces the original "js" with "q"
console.log(name);
