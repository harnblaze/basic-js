const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (str != null) {
        str = str.toString();
    }

    const repeatTimes = options.repeatTimes || 1;
    const separator = options.separator || "+";
    let addition = options.addition;
    const additionRepeatTimes = options.additionRepeatTimes || 1;
    const additionSeparator = options.additionSeparator || "|";
    let newStr = "";
    for (let i = 0; i < repeatTimes; i++) {
        newStr += str;
        if (addition !== undefined) {
            if (addition !== null) {
                addition = addition.toString();
            }
            newStr += addition;
            for (let i = 1; i < additionRepeatTimes; i++) {
                newStr += `${additionSeparator}${addition}`;
            }
        }
        if (i < repeatTimes - 1) {
            newStr += separator;
        }
    }
    return newStr;
};
