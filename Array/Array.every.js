// every()方法测试数组的所有元素是否都通过了指定函数的测试。
// 语法
// arr.every(callback[, thisArg])

function isBifEnough(element, index, array) {
    return element >= 10;
}

[12, 5, 8, 130, 44].every(isBifEnough); // false

[12, 54, 18, 130, 44].every(isBifEnough); // true

[12, 5, 8, 130, 44].every(x => {
    return x >= 10;
}); // false

[12, 54, 18, 130, 44].every(x => {
    return x >= 10;
}); // true

console.table([{ 'Chrome': '(Yes)', 'Edge': '(Yes)', 'Firefox': '1.5', 'Internet Explorer': '9', 'Opera': '(Yes)', 'Safari': '9' }]);