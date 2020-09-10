const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxLength = 1;
    arr.forEach((el) => {
      let countLength = 1;
      if (el instanceof Array) {
        countLength += this.calculateDepth(el);
        maxLength = Math.max(countLength, maxLength);
      }
    });
    return maxLength;
  }
};
