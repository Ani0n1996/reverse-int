module.exports = function reverse (num) {
    let str = num.toString().split("").reverse().join("");
    num = parseInt(str);
    return str.replace('-', '');
}
