// 语法
// arr[Symbol.unscopables]

var keys = [];

with (Array.prototype) {
    keys.push('something');
}

Object.keys(Array.prototype[Symbol.unscopables]);

console.table([{ 'Chrome': '?', 'Edge': '?', 'Firefox': '48', 'Internet Explorer': '?', 'Opera': '?', 'Safari': '?' }]);