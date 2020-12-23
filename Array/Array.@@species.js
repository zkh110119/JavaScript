// 语法
// Array[Symbol.species]

class MyArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

console.table([{ 'Chrome': '?', 'Edge': '?', 'Firefox': '48', 'Internet Explorer': '?', 'Opera': '?', 'Safari': '?' }])