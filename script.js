// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of
// this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
  let firstNumber = Math.pow(n, 2) - (n - 1);
  let sum = firstNumber;
  for (let i = 1; i < n; i++) {
    firstNumber += 2;
    sum += firstNumber;
  }
  return sum;
}
console.log(rowSumOddNumbers(4));
