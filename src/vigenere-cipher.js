const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(flag = true) {}
    encrypt(message, key) {
        if (!message || !key) {
            throw new Error("No args");
        }
        return message;

        // remove line with error and write your code here
    }
    decrypt(message, key) {
        if (!message || !key) {
            throw new Error("No args");
        }
        return message;
    }
}
module.exports = VigenereCipheringMachine;
