// copyWithin()方法将数组的一部分简单地复制到同一数组中的另一个位置，并将其返回，而不修改其大小。
// 语法

// arr.copyWithin(target)
// arr.copyWithin(target, start)
// arr.copyWithin(target, start, end)
// copy [start,end)位到从target开始的位置 备注：copyWithin不会改变数组的长度,target、start、end均为0为基底的索引

[1, 2, 3, 4, 5].copyWithin(-2);
// [1,2,3,1,2]

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4,5,3,4,5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4,2,3,4,5]

console.log([].copyWithin.call({ length: 5, 3: 1 }, 0, 3));

let i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);
console.log(i32a);

console.log([].copyWithin.call(new Int32Array([1,2,3,4,5]),0,3,4));

console.table([{ 'Chrome': '45', 'Edge': '12', 'Firefox': '32', 'Internet Explorer': '未实现', 'Opera': '32', 'Safari': '9' }]);
