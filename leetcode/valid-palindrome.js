/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let number = x.toString();

  let left = 0;
  let right = number.length - 1;

  while (left < right) {
    if (number.charAt(left) !== number.charAt(right)) {
      return false;
    }
    left++;
    right--;

    return true;
  }
};
