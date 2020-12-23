// entries()方法返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
// 语法
// a.entries()

let a = ['a','b','c'];

var iterator = a.entries();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

for(let e of iterator){
    console.log(e);
}

console.table([{ 'Chrome': '38', 'Edge': '(已实现)', 'Firefox': '28', 'Internet Explorer': '未实现', 'Opera': '25', 'Safari': '7.1' }]);