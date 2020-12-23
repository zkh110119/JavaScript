let words = ['spray', 'limit', 'elite', 'exuberant', 'destuction', 'present'];

let longWords = words.filter(function (word, index, array) {
    return word.length > 6;
});

console.log(longWords);

let longWordss = words.filter(word => {
    return word.length > 6;
});

console.log(longWordss);

console.table([{ 'Chrome': '(Yes)', 'Edge': '(Yes)', 'Firefox': '1.5', 'Internet Explorer': '9', 'Opera': '(Yes)', 'Safari': '(Yes)' }]);