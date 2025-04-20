function isPalindrome(str) {
  let st = str.split("");
  let left = 0;
  let right = st.length - 1;
  while (left < right) {
    if (st[left] !== st[right]) {
      return "not a palindrome";
    }
    left++;
    right--;
  }
  return "is palindrome";
}

console.log(isPalindrome("madame"));
