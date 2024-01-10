function addStrings(num1, num2) {
  num1 = num1.split("").reverse();
  num2 = num2.split("").reverse();

  const result = [];
  let carry = 0;
  let x = 0;

  while (x < num1.length || x < num2.length || carry) {
    const n1 = x < num1.length ? parseInt(num1[x]) : 0;
    const n2 = x < num2.length ? parseInt(num2[x]) : 0;
    const total = n1 + n2 + carry;

    result.push(total % 10);
    carry = Math.floor(total / 10);

    x++;
  }

  return result.reverse().join("");
}

console.log(addStrings("11", "123"));
console.log(addStrings("456", "77"));
console.log(addStrings("0", "0"));
