// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
// 语法
// arr.fill(value)
// arr.fill(value, start)
// arr.fill(value, start, end)

[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

console.table([{ 'Chrome': '45', 'Edge': '(Yes)', 'Firefox': '31', 'Internet Explorer': '未实现', 'Opera': '(Yes)', 'Safari': '7.1' }]);