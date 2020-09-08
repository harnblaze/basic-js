const CustomError = require("../extensions/custom-error");

module.exports = function countCats(/* matrix */) {
  let res = 0;
  matrix.forEach((array) => {
    array.forEach((item) => {
      if (item === '^^') {
        res++;
      }
    });
  });
  return res;
};
