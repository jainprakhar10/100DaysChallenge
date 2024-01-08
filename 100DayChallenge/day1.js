var s = "A man, a plan, a canal: Panama";
var s1 = "race a car";
var s2 = (s = " ");

function IsPalindrome(s) {
  const string = s.replace(/[^A-Z0-9]/gi, "").toLowerCase();
  const reverseString = string.split("").reverse().join("");

  if (string !== reverseString) {
    return false;
  } else {
    return true;
  }
}

console.log(IsPalindrome(s));
console.log(IsPalindrome(s1));
console.log(IsPalindrome(s2));