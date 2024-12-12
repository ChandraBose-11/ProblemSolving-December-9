function reverseAplha(str) {
  console.log(str);
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    while (
      !(
        (str[start] <= "z" && str[start] >= "a") ||
        (str[start] <= "Z" && str[start] >= "A")
      )
    ) {
      start++;
    }
    while (
      !(
        (str[end] <= "z" && str[end] >= "a") ||
        (str[end] <= "Z" && str[end] >= "A")
      )
    ) {
      end--;
    }
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }
  console.log(str);
}
reverseAplha(
  "This is Problem Solving 101, Here you will learn A-Z. And course Password Is Guvi#$$1"
);
