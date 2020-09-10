const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr.length === 0) {
    return [];
  }
  let newArr = [];
  let discard = false;
  let double = false;
  for (let i = 0; i < arr.length; i++) {
    if (discard) {
      discard = false;
      continue;
    } else if (double) {
      double = false;
      newArr.push(arr[i]);
      newArr.push(arr[i]);
      continue;
    }
    if (arr[i] === "--discard-prev") {
      if (i > 0 && arr[i - 2] !== "--discard-next") {
        newArr.pop();
      }
    } else if (arr[i] === "--discard-next") {
      discard = true;
    } else if (arr[i] === "--double-prev") {
      if (i > 0 && arr[i - 2] !== "--discard-next") {
        newArr.push(arr[i - 1]);
      }
    } else if (arr[i] === "--double-next") {
      double = true;
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
