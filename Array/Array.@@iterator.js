// @@iterator 属性的初始值与values()属性的初始值是相同的函数对象。
// 语法 
// arr[Symbol.iterator]()

let arr = ['w', 'y', 'k', 'o', 'p'];
let eArr = arr[Symbol.iterator]();

for (let letter of eArr) {
    console.log(letter);
}

console.log('--------------------------------------------------------------------------------------------------------');

let nArr = arr[Symbol.iterator]();

console.log(nArr.next().value);
console.log(nArr.next().value);
console.log(nArr.next().value);
console.log(nArr.next().value);
console.log(nArr.next().value);

console.log('--------------------------------------------------------------------------------------------------------');

console.table([{'Chrome':'38', 'Edge':'?', 'Firefox':'361 23-36(as @@iterator)2 12-27(as iterator)', 'Internet Explorer':'不支持', 'Opera':'25', 'Safari':'支持'}]);