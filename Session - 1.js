// console.log("Hello Everyone");
//* Day 1: Understanding Problem Statements & Systematic Solutions
//? Session Overview:
//* Learn to read and interpret problem statements, identify inputs, outputs, constraints, and break down tasks.
//? Session Practice Questions (5-7):
//! Determine if a number is positive or negative.

// function checkNumber(num) {
//     if (typeof num === "number") {
//         return num < 0 ? "Negative" : num > 0 ? "Positive" : num == 0 ? "Zero" : num;
//     }
//     return -1
// }
// console.log(checkNumber(0))
// console.log(checkNumber(1))
// console.log(checkNumber(-1))
// console.log(checkNumber("1"))
// console.log(checkNumber(NaN))

// console.log(NaN === 5)
// console.log(NaN < 5)
// console.log(NaN > 5)
// console.log(NaN === NaN)
// console.log(NaN < NaN)
// console.log(NaN > NaN);

// console.log(Number.isNaN(NaN))

//! Find the sum of two integers.
// function findSum(num1, num2) {
//     num1 = Number(num1);
//     num2 = Number(num2);
//     return num1 + num2;
// }

// console.log(findSum(1, 2))
// console.log(findSum(1325, "322"))
// console.log(findSum("10", "342"))
//! Identify the maximum and minimum of three numbers.

// function minAndMax(num1, num2, num3) {
//   num1 = Number(num1);
//   num2 = Number(num2);
//   num3 = Number(num3);
//   let min =
//     num1 < num2 ? (num1 < num3 ? num1 : num3) : num2 < num3 ? num2 : num3;
//   let max =
//     num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;
//   return [min, max];
// }

// console.log(minAndMax(1, 2, 3));
// console.log(minAndMax(1, 1, 1));
// console.log(minAndMax(1, -2, 0));
// console.log(minAndMax(-1, -2, -3));

// function minMidMax(num1, num2, num3) {
//   num1 = Number(num1);
//   num2 = Number(num2);
//   num3 = Number(num3);

//   let min =
//     num1 < num2 ? (num1 < num3 ? num1 : num3) : num2 < num3 ? num2 : num3;
//   let max =
//     num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;

//   let mid = num1 + num2 + num3 - max - min;

//   return {
//     min,
//     mid,
//     max,
//   };
// }

// console.log(minMidMax(1, 2, 3));
// console.log(minMidMax(-1, 0, 1));
// console.log(minMidMax(1, 1, 1));
// console.log(minMidMax(1, -2, -2));

//! Count the number of digits in a number.
// function countDigits(num) {
//   num = Number(num);
//   if (isNaN(num)) {
//     return "Invalid";
//   }
//   if (num < 0) {
//     num = -num;
//   }
//   if (num == 0) return 1;
//   num = parseInt(num);
//   let count = 0;
//   while (num > 0) {
//     count++;
//     num = parseInt(num / 10);
//   }
//   return count;
// }
// console.log(countDigits(12543));
// console.log(countDigits("12543"));
// console.log(countDigits("1254300000000000"));
// console.log(countDigits("00000000000012543"));
// console.log(countDigits(1));
// console.log(countDigits(125432465635245456343));
// console.log(countDigits("125r43"));
// console.log(countDigits(-12543));
// console.log(countDigits(0));

// console.log("1324r23".split("").filter(n => n <= '9' && n >='0').length);

function sumDigits(num) {
  num = Number(num);
  if (isNaN(num)) {
    return "Invalid";
  }
  if (num < 0) {
    num = -num;
  }
  num = parseInt(num);
  let total = 0;
  while (num > 0) {
    total += num % 10;
    num = parseInt(num / 10);
  }
  return total;
}

console.log(sumDigits(12543));
console.log(sumDigits(-987));
console.log(sumDigits("00000000000000000000000012543"));
console.log(sumDigits("1254300000"));
console.log(sumDigits(0));
console.log(sumDigits(-100001));

//! Check if a string contains only alphabets.
function isAlpha(str) {
  if (str == "") return "False";
  for (let ind = 0; ind < str.length; ind++) {
    if (
      !(
        (str[ind] >= "a" && str[ind] <= "z") ||
        (str[ind] >= "A" && str[ind] <= "Z")
      )
    ) {
      return "False";
    }
  }
  return "True";
}
console.log(isAlpha("Hello"));
console.log(isAlpha("Hello123"));
console.log(isAlpha(""));
console.log(isAlpha("hello world"));

//! Calculate the area of a circle with a given radius.
function areaOfCircle(radius) {
  return (Math.PI * radius * radius).toFixed(2);
}

console.log(areaOfCircle(5));
console.log(areaOfCircle(2.5));
console.log(areaOfCircle(1.1));
console.log(areaOfCircle(1000000));

//! Check if a character is a vowel.

function isVowel(char) {
  //   return "aeiouAEIOU".indexOf(char.charAt(0)) != -1;
  char = char.charAt(0).toLowerCase();
  return (
    char == "a" || char == "e" || char == "i" || char == "o" || char == "u" //||
    // char == "A" ||
    // char == "E" ||
    // char == "I" ||
    // char == "O" ||
    // char == "U"
  );
}

console.log(isVowel("a"));
console.log(isVowel("e"));
console.log(isVowel("i"));
console.log(isVowel("o"));
console.log(isVowel("u"));
console.log(isVowel("q"));
console.log(isVowel("r"));
console.log(isVowel("R"));
console.log(isVowel("H"));
console.log(isVowel("A"));

//?  Post-Session Practice Questions (10):
// TODO  Calculate the difference between two integers.
// TODO  Check if a number is even or odd.
// TODO  Calculate the perimeter of a rectangle.
// TODO  Find the largest of four numbers.
// TODO  Calculate the average of three numbers.
// TODO  Identify if a number is divisible by both 3 and 5.
// TODO  Count the number of vowels in a string.
// TODO  Determine if a character is an uppercase letter.
// TODO  Print the reverse of a string.
// TODO  Find the square of a number.
