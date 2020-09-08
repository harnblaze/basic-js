const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res = '';
  if (members instanceof Array) {
    members.forEach((item) => {
      if (typeof item === 'string') {
        let name = item.trim();
        res += name[0];
      }
    });
    return res.toUpperCase().split('').sort().join('');
  } else {
    return false;
  }
};
